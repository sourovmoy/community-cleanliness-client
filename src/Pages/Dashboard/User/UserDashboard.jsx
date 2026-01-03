import React from "react";
import { Link } from "react-router";
import { FaClipboardList, FaDonate } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

const UserDashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            to={"/dashboard/user"}
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="My Dashboard"
          >
            {/* Home icon */}
            <LuLayoutDashboard className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden">My Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard/user/my-issues"}
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="My Issues"
          >
            {/* Home icon */}
            <FaClipboardList className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden">My Issues</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard/user/my-contribution"}
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="My Contribution"
          >
            {/* Home icon */}
            <FaDonate className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden">My Contribution</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDashboard;
