import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="mb-5 lg:mb-10">
      {/* Container */}
      <div className="container-fixed flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center flex-wrap gap-1 lg:gap-5">
          <h1 className="font-medium text-lg text-gray-900"></h1>
          <div className="flex items-center gap-1 text-sm font-normal">
            <a className="text-gray-700 hover:text-primary" href="/html/demo2.html">
              Home
            </a>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a className="btn btn-light btn-sm" href="/html/demo2/public-profile/profiles/default.html">
            View Profile
          </a>
        </div>
      </div>
      {/* End of Container */}
    </div>
  );
};

export default Toolbar;
