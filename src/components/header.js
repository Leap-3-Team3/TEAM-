import { useNavigate } from "react-router-dom";
const Header = ({ color }) => {
  const navigate = useNavigate();
  let headerButtonDatas = [
    {
      text: "Blogs",
      url: "/blogs",
    },
    {
      text: "My Blogs",
      url: "/userblogs",
    },
    {
      text: "Log in",
      url: "/login",
    },
    {
      text: "Profile",
      url: "/profile",
    },
  ];
  function handleRoute({ url }) {
    console.log(url);
    navigate(url);
    console.log("navigate to" + url);
  }
  return (
    <div className="flex flex-row justify-between bg-transparent absolute top-0 left-0 w-full h-[60px] items-center pt-4">
      <div className="text-3xl font-extrabold justify-center items-center p-4 ml-10">
        team.
      </div>
      <div className="flex flex-row mr-10">
        {headerButtonDatas.map((item, index) => {
          return (
            <div
              className={`${color} text-base p-4 items-center justify-center`}
              onClick={() => handleRoute(item.url)}
              key={index}
            >
              {item.text}
            </div>
          );
        })}
        <button className="bg-transparent p-4 border-white text-slate-500 rounded border-2">
          Get Access
        </button>
      </div>
    </div>
  );
};
export default Header;
