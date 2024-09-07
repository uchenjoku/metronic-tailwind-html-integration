import React from 'react';

const Grid: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
      <div className="lg:col-span-2">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
          {/* Card 1 */}
          <div className="card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-2.5rem] bg-no-repeat channel-stats-bg">
            <div className="flex flex-col gap-4 pt-6">
              <i className="ki-filled ki-badge text-2xl text-gray-600"></i>
              <div className="flex flex-col gap-2.5 mb-2">
                <h3 className="text-base font-semibold leading-none text-gray-900">Personal info</h3>
                <span className="text-2sm text-gray-800 leading-5">
                  Central hub for users: view data, change settings, see activity logs, manage tasks, read notes, get alerts, and more
                </span>
              </div>
            </div>
            <div className="flex mb-4 items-center gap-1 cursor-pointer">
              <a className="btn text-primary hover:text-primary-active px-0" href="/html/demo2/account/members/team-info.html">
                View page
              </a>
              <i className="ki-filled ki-right text-primary text-xs"></i>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-2.5rem] bg-no-repeat channel-stats-bg">
            <div className="flex flex-col gap-4 pt-6">
              <i className="ki-filled ki-security-user text-2xl text-gray-600"></i>
              <div className="flex flex-col gap-2.5 mb-2">
                <h3 className="text-base font-semibold leading-none text-gray-900">Login & Security</h3>
                <span className="text-2sm text-gray-800 leading-5">
                  Set passwords, enable 2FA, view login logs, update security questions, track account activity for better safety
                </span>
              </div>
            </div>
            <div className="flex mb-4 items-center gap-1 cursor-pointer">
              <a className="btn text-primary hover:text-primary-active px-0" href="/html/demo2/account/security/security-log.html">
                View page
              </a>
              <i className="ki-filled ki-right text-primary text-xs"></i>
            </div>
          </div>

          {/* Additional cards can follow the same structure */}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="card h-full">
          <div className="card-header">
            <h3 className="card-title">My Balance</h3>
            <div className="menu" data-menu="true">
              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                <i className="ki-filled ki-dots-vertical"></i>
              </button>
              <div className="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                <div className="menu-item">
                  <a className="menu-link" href="/html/demo2/account/home/settings-enterprise.html">
                    <span className="menu-icon">
                      <i className="ki-filled ki-setting-3"></i>
                    </span>
                    <span className="menu-title">Settings</span>
                  </a>
                </div>
                {/* More menu items */}
              </div>
            </div>
          </div>
          <div className="card-body flex flex-col gap-2 px-5 lg:px-7.5 pt-5">
            <span className="text-2sm font-normal text-gray-800">Available balance</span>
            <span className="text-3xl font-semibold text-gray-900 mb-3">$9,395.72</span>
            <div className="btn-group">
              <button className="btn btn-sm btn-light">Today</button>
              <button className="btn btn-sm btn-light">Week</button>
              <button className="btn btn-sm btn-light active">Month</button>
              <button className="btn btn-sm btn-light">Year</button>
            </div>
          </div>
          <div className="px-3" id="my_balance_chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
