import Link from "react-router-dom";

function Navi() {
  return (
    <nav>
        <ul>
            <li><Link to="/"></Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </nav>
  );
}

export default Navi



// export const Navi = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <div className="container">
//       <Link href="/" className="navbar-brand">
//         Home
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle Navi"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <Link href="/about" className="nav-link">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/services" className="nav-link">
//               Services
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/uploadcode" className="nav-link">
//               Upload Image
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );