import { CustomAvatar } from "./CustomAvatar";

export const UserFooter = ({ date, userName }) => {
  return (
    <div className="flex items-center">
      <CustomAvatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
      <h2 className="mx-2 text-gray-500">{userName}</h2>
      <svg
        width="2"
        height="10"
        viewBox="0 0 2 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2"
      >
        <path d="M0.162 10V0.129999H1.618V10H0.162Z" fill="#BBC8D4" />
      </svg>
      <p className="mx-2 text-gray-500">{date}</p>
    </div>
  );
};
