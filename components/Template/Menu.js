import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu w-60 h-screen bg-gray-100">
      <ul>
        <li>
          <Link href="/sprints">Sprints</Link>
        </li>
        <li>
          <Link href="/tasks">Backlog</Link>
        </li>
        <li>
          <Link href="/developers">Developers</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
