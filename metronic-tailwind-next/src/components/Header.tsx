import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="flex items-center transition-[height] shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark] h-[--tw-header-height]"
      data-sticky="true"
      data-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-sm backdrop-blur-md bg-white/70 dark:bg-coal-500/70 dark:border-b dark:border-b-coal-100"
      data-sticky-name="header"
      data-sticky-offset="200px"
      id="header"
    >
      <div
        className="container-fixed flex justify-between items-center lg:gap-4"
        id="header_container"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 lg:gap-5 2xl:-ml-[60px]">
          <a href="/html/demo2.html">
            <img
              className="dark:hidden min-h-[42px]"
              src="/media/app/mini-logo-circle.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:inline-block min-h-[42px]"
              src="/media/app/mini-logo-circle-dark.svg"
              alt="Dark Logo"
            />
          </a>
          <div className="flex items-center">
            <h3 className="text-gray-700 text-base hidden md:block">
              MetronicTeam
            </h3>
            <span className="text-sm text-gray-400 font-medium px-2.5 hidden md:inline">
              /
            </span>
            <div className="menu menu-default" data-menu="true">
              <div
                className="menu-item"
                data-menu-item-offset="0, 10px"
                data-menu-item-placement="bottom-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="hover"
              >
                <button className="menu-toggle text-gray-900 font-medium">
                  Account
                  <span className="menu-arrow">
                    <i className="ki-filled ki-down"></i>
                  </span>
                </button>
                <div className="menu-dropdown menu-default w-48">
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo2/network/get-started.html"
                      tabIndex={0}
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-users"></i>
                      </span>
                      <span className="menu-title">Network</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo2/authentication/get-started.html"
                      tabIndex={0}
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-security-user"></i>
                      </span>
                      <span className="menu-title">Authentication</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Logo */}
        {/* Topbar */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1">
            <div
              className="dropdown"
              data-dropdown="true"
              data-dropdown-offset="115px, 10px"
              data-dropdown-placement="bottom-end"
              data-dropdown-trigger="click|lg:click"
            >
              <button className="dropdown-toggle btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                <i className="ki-filled ki-notification-status text-gray-600"></i>
              </button>
              <div className="dropdown-content light:border-gray-300 w-full max-w-[460px]">
                {/* Dropdown content for notifications */}
              </div>
            </div>
          </div>
          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-offset="20px, 10px"
              data-menu-item-placement="bottom-end"
              data-menu-item-toggle="dropdown"
              data-menu-item-trigger="click|lg:click"
            >
              <div className="menu-toggle btn btn-icon rounded-full">
                <img
                  alt=""
                  className="size-9 rounded-full justify-center border border-gray-500 shrink-0"
                  src="/media/avatars/gray/5.png"
                />
              </div>
              <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[250px]">
                <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
                  <div className="flex items-center gap-2">
                    <img
                      alt=""
                      className="size-9 rounded-full border-2 border-success"
                      src="/media/avatars/300-2.png"
                    />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-sm text-gray-800 font-semibold leading-none">
                        Cody Fisher
                      </span>
                      <a
                        className="text-xs text-gray-600 hover:text-primary font-medium leading-none"
                        href="html/demo2/account/home/get-started.html"
                      >
                        c.fisher@gmail.com
                      </a>
                    </div>
                  </div>
                  <span className="badge badge-xs badge-primary badge-outline">
                    Pro
                  </span>
                </div>
                <div className="menu-separator"></div>
                <div className="flex flex-col">
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo2/public-profile/profiles/default.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-badge"></i>
                      </span>
                      <span className="menu-title">Public Profile</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="https://devs.keenthemes.com">
                      <span className="menu-icon">
                        <i className="ki-filled ki-message-programming"></i>
                      </span>
                      <span className="menu-title">Dev Forum</span>
                    </a>
                  </div>
                </div>
                <div className="menu-separator"></div>
                <div className="flex flex-col">
                  <div className="menu-item mb-0.5">
                    <div className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-filled ki-moon"></i>
                      </span>
                      <span className="menu-title">Dark Mode</span>
                      <label className="switch switch-sm">
                        <input
                          data-theme-state="dark"
                          data-theme-toggle="true"
                          name="check"
                          type="checkbox"
                          value="1"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="menu-item px-4 py-1.5">
                    <a
                      className="btn btn-sm btn-light justify-center"
                      href="html/demo2/authentication/classic/sign-in.html"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Topbar */}
      </div>
      {/* End of Container */}
    </header>
  );
};

export default Header;
