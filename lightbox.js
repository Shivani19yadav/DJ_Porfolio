document.addEventListener("DOMContentLoaded", function() {
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxContainer = document.getElementById("lightbox-container");
  const lightboxContent = document.getElementById("lightbox-content");
  const lightboxClose = document.getElementById("lightbox-close");

  // Open lightbox when an image or video is clicked
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      const itemType = this.getAttribute("data-type");
      const itemSource = this.getAttribute("href");
      if (itemType === "image") {
        const image = document.createElement("img");
        image.setAttribute("src", itemSource);
        image.classList.add("lightbox-item");
        lightboxContent.innerHTML = "";
        lightboxContent.appendChild(image);
      } else if (itemType === "video") {
        const video = document.createElement("iframe");
        video.setAttribute("src", itemSource);
        video.setAttribute("allowfullscreen", "true");
        video.classList.add("lightbox-item");
        lightboxContent.innerHTML = "";
        lightboxContent.appendChild(video);
      }
      lightboxOverlay.style.display = "flex";
    });
  });

  // Close lightbox when close button is clicked
  lightboxClose.addEventListener("click", function() {
    lightboxOverlay.style.display = "none";
  });

  // Close lightbox when overlay is clicked
  lightboxOverlay.addEventListener("click", function(event) {
    if (event.target === lightboxOverlay) {
      lightboxOverlay.style.display = "none";
    }
  });
});

const videoThumbnails = document.querySelectorAll(
  ".video-gallery .all-videos .thumbnail"
);
const videoPlayer = document.querySelector(
  ".video-gallery .featured-video iframe"
);
const videoTitle = document.querySelector(".video-gallery .video-title");

const showVideo = (videoId, title) => {
  let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  videoPlayer.setAttribute("src", videoUrl);
  videoTitle.innerHTML = title;
};

videoThumbnails.forEach((v) => {
  v.addEventListener("click", () => {
    showVideo(v.dataset.id, v.dataset.title);
  });
});


