// for toggle menu
const toggleMenu = () => {
  const menuMobile = document.querySelector(".body-navbar-menu-mobile");
  if (menuMobile.style.display === "block") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
  }
};

// for hidden if width is't for mobile again
const noneMenuMobile = () => {
  const menuMobile = document.querySelector(".body-navbar-menu-mobile");
  if (window.innerWidth > 900) {
    menuMobile.style.display = "none";
  }
};

window.addEventListener("resize", noneMenuMobile);

// document.addEventListener("DOMContentLoaded", function () {
//   let links = document.querySelectorAll(".navbar-menu span a");

//   // Memeriksa setiap tautan
//   links.forEach(function (link) {
//     // Menambahkan event listener untuk setiap tautan
//     link.addEventListener("click", function () {
//       // Menghapus kelas 'active' dari semua tautan
//       links.forEach(function (otherLink) {
//         otherLink.classList.remove("active");
//       });

//       // Mengubah warna tautan ketika diklik
//       link.classList.add("active");

//       // Mengecek apakah tautan telah dikunjungi
//       if (!link.classList.contains("visited")) {
//         // Menambahkan kelas ke tautan yang telah dikunjungi
//         link.classList.add("visited");
//       }
//     });

//     // Mengecek apakah tautan telah dikunjungi
//     if (link.visited) {
//       // Menambahkan kelas ke tautan yang telah dikunjungi
//       link.classList.add("visited");
//     }
//   });
// });
