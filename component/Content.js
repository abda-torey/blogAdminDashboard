import classes from "./Content.module.css";
import { Line } from "react-chartjs-2";
import { Legend } from "chart.js";
import Image from "next/image";

import postPic from "../public/background2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPencil,faTrashCan,faPen } from "@fortawesome/free-solid-svg-icons";




function Content() {
  //data for bar chart
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "No of Visitors",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
      },
    ],
  };

  //doughnut chart data set

  const data1 = {
    labels: ["Organic", "Social Media", "Websites"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.tabs}>
          <h2>Company</h2>
        </div>
        <div className={classes.tabs}>
          <h2>Users</h2>
        </div>
        <div className={classes.tabs}>
          <h2>Projects</h2>
        </div>
        <div className={classes.tabs}>
          <h2>Traffic</h2>
        </div>
      </div>
      <div className={classes.charts}>
        <div className={classes.bar}>
          <h2>Visitor Statistics</h2>
          <Line data={data} width={800} height={300} />
        </div>
      </div>
      <div className={classes.recents}>
        <table className={classes.table}>
          <caption><h3>Recent Posts</h3></caption>
          <thead className={classes.thead}>
            <tr>
              <th>Date & Time</th>
              <th>Post</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
            <tr>
              <td><h5>2 Nov 20222</h5></td>
              <td>
                <div className={classes.articleContainer}>
                  <div className={classes.articleImg}>
                    <Image src={postPic} width={40} height={30} className={classes.Image} alt="Post Image" />
                  </div>
                  <div className={classes.title}>
                    <h5>Creating Auth Project With NextJs</h5>
                  </div>
                </div>
              </td>
              <td><h5>Abda Torey</h5></td>
              <td>
                <div className={classes.buttonContainer}>
                  <div className={classes.deleteButton}>
                    
                  
                    <FontAwesomeIcon icon={faTrashCan} style={{width: "18px", cursor: "pointer", color:"red"}} />
                    
                   
                   
                  </div>
                  <div className={classes.editButton}>
                    
                    <FontAwesomeIcon icon={faPen} style={{width: "18px", cursor: "pointer",color:"blue"}} />
                    
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td><h5>2 Nov 20222</h5></td>
              <td>
                <div className={classes.articleContainer}>
                  <div className={classes.articleImg}>
                    <Image src={postPic} width={40} height={30} className={classes.Image} alt="Post Image" />
                  </div>
                  <div className={classes.title}>
                    <h5>Creating Auth Project With NextJs</h5>
                  </div>
                </div>
              </td>
              <td><h5>Abda Torey</h5></td>
              <td>
                <div className={classes.buttonContainer}>
                  <div className={classes.deleteButton}>
                    
                  
                    <FontAwesomeIcon icon={faTrashCan} style={{width: "18px", cursor: "pointer", color:"red"}} />
                    
                   
                   
                  </div>
                  <div className={classes.editButton}>
                    
                    <FontAwesomeIcon icon={faPen} style={{width: "18px", cursor: "pointer",color:"blue"}}  />
                    
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={classes.post}>
       
      </div>
    </div>
  );
}

export default Content;
