# Cosmic Zoom
## Overview
The **Cosmic Zoom** is a web application designed to allow users to explore NASA’s high-resolution image datasets, ranging from gigapixel to terapixel scale. The app enables interactive zooming and panning, and labelling of known features. By providing an intuitive interface and adaptive image streaming, the platform makes vast space datasets accessible to researchers, educators, and the general public.

## Features
- **Multi-Resolution Image Streaming**: Tile-based loading allows smooth zooming and panning without downloading entire massive images.  
- **Search and Navigation**: Users can find features using coordinates, feature names.
- **Adaptive Performance**: Only relevant image tiles are loaded, optimising performance for standard devices and web browsers.  
- **Interactive Video Exploration**: Optionally view time-lapse or sequential imagery for Earth or planetary surfaces.

## Technologies
- Frontend: HTML, CSS, JavaScript
- Image Handling: Tile-based streaming, multi-resolution pyramids  
- Backend: Node.js server for serving image tiles and datasets  
