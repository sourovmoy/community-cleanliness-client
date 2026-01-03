import React from "react";
import { FaCoins, FaDonate } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link
              to={"/dashboard/admin"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Dashboard"
            >
              {/* Home icon */}
              <LuLayoutDashboard className="my-1.5 inline-block size-4" />
              <span className="is-drawer-close:hidden">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/admin/contributions"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Contribution"
            >
              {/* Home icon */}
              <FaCoins className="my-1.5 inline-block size-4" />
              <span className="is-drawer-close:hidden">Contribution</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
