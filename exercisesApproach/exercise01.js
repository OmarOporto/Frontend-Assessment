//************************************************ Final Version **************************************************************/
function makeSidebarSticky() {
  const sidebar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');
  const footer = document.querySelector('#navFooter');

  if (!sidebar || !footer) {
    console.log("Elements not found");
    return;
  }

  const offsetTop = 260;
  const originalWidth = sidebar.offsetWidth + 'px';

  const handleScroll = () => {

    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const sidebarBottomPosition = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const BottomComponentHeight = 880;
    const sidebarHeight = 762;
    const sidebarBottomMargin = 20;

    if (sidebarBottomPosition >= footerPosition + (window.innerHeight - sidebarHeight - sidebarBottomMargin)) {
      sidebar.style.position = 'absolute';
      sidebar.style.maxHeight = `${sidebarHeight}px`;
      sidebar.style.top = `${totalHeight - BottomComponentHeight - sidebarHeight - offsetTop - sidebarBottomMargin}px`;
    } else if (window.scrollY > offsetTop) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '20px';
      sidebar.style.width = originalWidth;
      sidebar.style.maxHeight = '100vh';
    } else {
      sidebar.style.position = 'static';
      sidebar.style.maxHeight = '100vh';
    }
  };

  window.addEventListener('scroll', handleScroll);

  window.addEventListener('resize', () => {
    isStickyEnabled = window.innerWidth > 1024;
    if (!isStickyEnabled) {
      sidebar.style.position = 'static';
      window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
  });
}

makeSidebarSticky();

if(document.querySelector('#rhf.copilot-secure-display')) {
  const bottomFrame = document.querySelector('#rhf.copilot-secure-display');
  bottomFrame.style.position = 'relative';
  bottomFrame.style.left = '210px';
  bottomFrame.style.maxWidth = 'calc(100vw - 230px)'
}

if(document.querySelector('#zg_colmask')) {
  const zg_colmask = document.querySelector('#zg_colmask');
  zg_colmask.style.overflow = "visible";
}

if(document.querySelector('#zg_left_colmask')) {
  const zg_left_colmask = document.querySelector('#zg_left_colmask');
  zg_left_colmask.style.overflow = "visible";
}

if(document.querySelector('#zg_col1')) {
  const zg_col1 = document.querySelector('#zg_col1');
  zg_col1.style.overflow = "visible";
}

if(document.querySelector('#zg_left_col1')) {
  const zg_left_col1 = document.querySelector('#zg_left_col1');
  zg_left_col1.style.width = "calc(-258px + 100vw)";
  zg_left_col1.style.paddingRight = "0px";
}


if(document.querySelector('#zg_left_colleft')) {
  const zg_left_colleft = document.querySelector('#zg_left_colleft');
  zg_left_colleft.style.width = "calc(-234.6px + 100vw)";
}

