import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex  flex-column justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <h2 className="text-danger"> 404 Error: Page not found! </h2>
      <button className="btn btn-success" onClick={()=> navigate("/table",{replace:true})}>Go to Table</button> 
    </div>
  );
};

export default Error;
//replace true make it that on clicking back the stack will remove the top most url.
