function makeSidebarSticky() {

  const sidebar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');
  const footer = document.querySelector('#navFooter');

  if (sidebar) {
    console.log("Sidebar founded");
  }
  else {
    console.log("Sidebar not Founded");
  }

  if (!sidebar || !footer) {
    console.log("No se encontraron los elementos necesarios.");
    return;
  }

  const offsetTop = sidebar.offsetTop;
  const originalWidth = sidebar.offsetWidth + 'px';
  console.log('offsetTOP: ', offsetTop)

  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetTop + 200 && window.scrollY + sidebar.offsetHeight < footer.offsetTop) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '0';
      sidebar.style.width = originalWidth;;
    } else if (window.scrollY + sidebar.offsetHeight >= footer.offsetTop) {
      sidebar.style.position = 'absolute';
      sidebar.style.bottom = '0';
      sidebar.style.top = 'auto';
    } else {
      sidebar.style.position = 'static';
    }
  });
}

makeSidebarSticky();

