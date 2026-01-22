import os
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# CONFIGURATION
BASE_URL = "https://virtualcoffee.com/"
# List the visible pages you want to clone for the 'Marketing' side
TARGET_PAGES = [
    "",              # Home
    "about/",        # About
    "blog/",         # Blog index (if applicable)
    "testimonials/"  # Social Proof
]
OUTPUT_DIR = "assets_dump"
IMAGE_DIR = os.path.join(OUTPUT_DIR, "images")
DATA_FILE = os.path.join(OUTPUT_DIR, "site_data.json")

# SETUP
if not os.path.exists(IMAGE_DIR):
    os.makedirs(IMAGE_DIR)

def download_image(img_url):
    """Downloads image and returns local path."""
    try:
        response = requests.get(img_url, stream=True, timeout=5)
        if response.status_code == 200:
            filename = os.path.basename(urlparse(img_url).path)
            if not filename: return None
            filepath = os.path.join(IMAGE_DIR, filename)
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return f"/images/{filename}" # Path for your Next.js public folder
    except Exception as e:
        print(f"Failed to download {img_url}: {e}")
    return None

def scrape_site():
    site_data = []
    
    print(f"--- Starting Smash & Grab on {BASE_URL} ---")

    for page in TARGET_PAGES:
        url = urljoin(BASE_URL, page)
        print(f"Scraping: {url}")
        
        try:
            res = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
            soup = BeautifulSoup(res.text, 'lxml')
            
            # 1. Grab Title
            title = soup.title.string if soup.title else page
            
            # 2. Grab Main Content (Adjust selector based on inspection, usually 'main' or 'article')
            # Fallback to 'body' if specific tag missing, stripping scripts
            content_div = soup.find('main') or soup.find('body')
            for s in content_div(["script", "style", "nav", "footer"]):
                s.extract() # Remove noise
            
            raw_text = content_div.get_text(strip=True)[:500] + "..." # Preview
            
            # 3. Grab & Download Images
            images = []
            for img in content_div.find_all('img'):
                src = img.get('src')
                if src:
                    abs_url = urljoin(url, src)
                    local_path = download_image(abs_url)
                    if local_path:
                        images.append(local_path)

            site_data.append({
                "url": page if page else "home",
                "title": title,
                "content_snippet": raw_text,
                "images": images,
                "type": "marketing_page"
            })
            
        except Exception as e:
            print(f"Error scraping {page}: {e}")

    # --- GENERATE MOCK COURSE DATA ---
    # Since we can't see the course, we architect the STRUCTURE now.
    print("--- Generating Mock Course Data (The 'Ghost' Content) ---")
    course_modules = ["Coffee Theory", "Brewing Basics", "Espresso Mastery", "Milk Texturing", "Latte Art"]
    
    for i, module in enumerate(course_modules):
        site_data.append({
            "model": "core.Module",
            "fields": {
                "title": module,
                "order": i + 1,
                "is_locked": True, # Test your locking logic
                "lessons": [
                    {
                        "title": f"{module} - Lesson 1",
                        "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ", # Rick Roll as placeholder ID
                        "duration": "5:00"
                    },
                    {
                        "title": f"{module} - Lesson 2",
                        "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "duration": "12:30"
                    }
                ]
            }
        })

    # DUMP
    with open(DATA_FILE, 'w') as f:
        json.dump(site_data, f, indent=4)
    
    print(f"--- DONE. Data saved to {DATA_FILE} ---")

if __name__ == "__main__":
    scrape_site()