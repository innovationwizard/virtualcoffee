import requests
import re
from bs4 import BeautifulSoup
from collections import Counter
from urllib.parse import urljoin

# CONFIGURATION
TARGET_URL = "https://virtualcoffee.com/"
OUTPUT_FILE = "./tailwind.config.ts" # Targets your Next.js app directly

def extract_styles():
    print(f"🕵️  Infiltrating {TARGET_URL} to steal design tokens...")
    
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        response = requests.get(TARGET_URL, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"❌ Failed to reach site: {e}")
        return

    # 1. HARVEST CSS
    css_content = ""
    
    # Get inline styles
    for style in soup.find_all('style'):
        css_content += style.get_text()
        
    # Get external stylesheets
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href')
        if href:
            full_url = urljoin(TARGET_URL, href)
            try:
                print(f"   -> Fetching CSS: {full_url}")
                css_res = requests.get(full_url, headers=headers, timeout=5)
                css_content += css_res.text
            except:
                pass

    # 2. EXTRACT & RANK COLORS
    # Find all hex codes (e.g., #ffffff, #333)
    hex_codes = re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}(?![0-9a-fA-F])', css_content)
    # Normalize to lowercase
    hex_codes = [c.lower() for c in hex_codes]
    
    # Count frequency to guess roles
    color_counts = Counter(hex_codes).most_common(10)
    print(f"🎨 Top Colors Found: {color_counts}")

    # Heuristic: 
    # Most common is usually Black/Dark Text or White Background.
    # We need to manually map these based on the result, 
    # but for now, we will dump the Top 5 into the config as variables.
    
    if not color_counts:
        print("⚠️ No colors found! Using fallbacks.")
        palette = ["#ffffff", "#000000", "#555555", "#d4af37", "#fdf8f6"]
    else:
        palette = [c[0] for c in color_counts]

    # 3. EXTRACT FONTS
    fonts = re.findall(r'font-family:\s*([^;]+);', css_content)
    # Clean up strings (remove quotes)
    clean_fonts = [f.replace('"', '').replace("'", "").split(',')[0].strip() for f in fonts]
    font_counts = Counter(clean_fonts).most_common(5)
    print(f"🔤 Top Fonts Found: {font_counts}")
    
    main_font = font_counts[0][0] if font_counts else "sans-serif"
    
    # 4. GENERATE TAILWIND CONFIG
    # We map the extracted colors to generic slots (brand-1, brand-2) to ensure they are available.
    
    config_content = f"""
import type {{ Config }} from "tailwindcss";

const config: Config = {{
  content: [
    "./pages/**/*.{{js,ts,jsx,tsx,mdx}}",
    "./components/**/*.{{js,ts,jsx,tsx,mdx}}",
    "./app/**/*.{{js,ts,jsx,tsx,mdx}}",
  ],
  theme: {{
    extend: {{
      colors: {{
        // AUTO-EXTRACTED FROM LIVE SITE
        brand: {{
          base: '{palette[0] if len(palette) > 0 else "#ffffff"}',   // Most frequent (likely bg or text)
          primary: '{palette[1] if len(palette) > 1 else "#000000"}', // Second most (likely text or main brand)
          accent: '{palette[2] if len(palette) > 2 else "#888888"}',
          highlight: '{palette[3] if len(palette) > 3 else "#cccccc"}',
        }},
        // Keep standard coffee semantic names mapped to extracted values if possible
        coffee: {{
          50: '{palette[0] if len(palette) > 0 else "#fdf8f6"}', 
          900: '{palette[1] if len(palette) > 1 else "#2b211b"}',
        }}
      }},
      fontFamily: {{
        sans: ['{main_font}', 'sans-serif'],
        serif: ['serif'], // Could not reliably detect serif distinction without visual analysis
      }},
    }},
  }},
  plugins: [],
}};
export default config;
"""

    with open(OUTPUT_FILE, 'w') as f:
        f.write(config_content)
    
    print(f"✅ Generated {OUTPUT_FILE} with extracted styles.")

if __name__ == "__main__":
    extract_styles()