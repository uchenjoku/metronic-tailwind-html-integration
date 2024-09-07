import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="border-b border-gray-200 pb-5 lg:pb-0 mb-5 lg:mb-10">
      {/* Container */}
      <div className="container-fixed flex flex-wrap justify-between items-center gap-2">
        <div className="grid">
          <div className="scrollable-x-auto">
            <div className="menu gap-5 lg:gap-7.5" data-menu="true">
              <div
                className="menu-item border-b border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900"
                data-menu-item-placement="bottom-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="click|lg:hover"
              >
                <div className="menu-link gap-1.5 pb-2 lg:pb-4" tabIndex={0}>
                  <span className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Account Home
                  </span>
                  <span className="menu-arrow">
                    <i className="ki-filled ki-down text-2xs text-gray-500"></i>
                  </span>
                </div>
                <div className="menu-dropdown menu-default py-2 min-w-[200px]">
                  <div className="menu-item">
                    <a className="menu-link" href="html/demo2.html" tabIndex={0}>
                      <span className="menu-title">Dashboard</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo2/account/home/get-started.html"
                      tabIndex={0}
                    >
                      <span className="menu-title">Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Other menu items */}
              <div
                className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900"
              >
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="html/demo2/account/integrations.html"
                  tabIndex={0}
                >
                  <span className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Integrations
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-2sm text-gray-800 gap-5 lg:pb-4">
          <a
            className="hover:text-primary"
            href="https://www.youtube.com/c/KeenThemesTuts/videos"
          >
            Videos
          </a>
          <a
            className="hover:text-primary"
            href="https://keenthemes.com/metronic/tailwind/docs/"
          >
            User Guides
          </a>
          <a
            className="hover:text-primary"
            href="https://devs.keenthemes.com"
          >
            Support
          </a>
        </div>
      </div>
      {/* End of Container */}
    </div>
  );
};

export default Navbar;
