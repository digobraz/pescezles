import os
import re
import urllib.request
from glob import glob
from urllib.parse import urlparse

original_html_dir = "/Users/stachoman/AI/PESCEZLES/original_html"
output_dir = "/Users/stachoman/AI/PESCEZLES/images"
os.makedirs(output_dir, exist_ok=True)

# Find all HTML files
html_files = glob(os.path.join(original_html_dir, "*.html"))

# We also need the index page if not present
if not os.path.exists(os.path.join(original_html_dir, "index.html")):
    urllib.request.urlretrieve("https://www.pescezles.sk/", os.path.join(original_html_dir, "index.html"))
    html_files.append(os.path.join(original_html_dir, "index.html"))

# Regex to find links
pattern = re.compile(r'https://www\.pescezles\.sk/wp-content/uploads/[^"\'\s)]+')

all_urls = set()
for file in html_files:
    with open(file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        urls = pattern.findall(content)
        all_urls.update(urls)

# Also match relative links if they exist, but the previous scan showed absolute links.
# Filter out some useless CSS/js fonts if matched incorrectly
filtered_urls = [u for u in all_urls if u.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'))]

print(f"Found {len(filtered_urls)} unique image URLs.")

for url in filtered_urls:
    try:
        # Some URLs might have query parameters like ?v=1, split them
        clean_url = url.split('?')[0]
        filename = os.path.basename(urlparse(clean_url).path)
        if not filename:
            continue
        dest = os.path.join(output_dir, filename)
        if not os.path.exists(dest):
            urllib.request.urlretrieve(clean_url, dest)
    except Exception as e:
        print(f"Failed to download {url}: {e}")

print("Download complete.")
