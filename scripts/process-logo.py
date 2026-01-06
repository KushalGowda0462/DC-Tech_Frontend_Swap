#!/usr/bin/env python3
"""
Process Enseigner logo: Remove white background and trim excess whitespace
"""
from PIL import Image
import sys
import os

def process_logo(input_path, output_path):
    """Remove white background and trim whitespace from logo"""
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Get image data
        data = img.getdata()
        
        # Create new image data with transparent white pixels
        new_data = []
        for item in data:
            # Check if pixel is white (with some tolerance)
            # White is typically (255, 255, 255) or close to it
            r, g, b, a = item
            # Use 8% fuzz factor (similar to ImageMagick)
            if r > 240 and g > 240 and b > 240:
                # Make it transparent
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        
        # Update image with new data
        img.putdata(new_data)
        
        # Trim transparent/white edges
        # Get bounding box of non-transparent pixels
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
        
        # Save the processed image
        img.save(output_path, 'PNG', optimize=True)
        print(f"✓ Logo processed successfully: {output_path}")
        print(f"  Original size: {Image.open(input_path).size}")
        print(f"  New size: {img.size}")
        return True
    except Exception as e:
        print(f"Error processing logo: {e}")
        return False

if __name__ == "__main__":
    input_file = "public/Enseigner_Logo.png"
    output_file = "public/enseigner-logo.png"
    
    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        sys.exit(1)
    
    success = process_logo(input_file, output_file)
    sys.exit(0 if success else 1)

