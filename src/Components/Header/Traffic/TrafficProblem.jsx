import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProblemHeader from "../about/Offices/OfficesHeader";

function TrafficProblem() {
  const [click, setClick] = useState({});

  const clickhandle = (index) => {
    setClick((prevClick) => ({
      ...prevClick,
      [index]: !prevClick[index],
    }));
  };

  const ProblemData = [
    {
      title: "ANIMAL/ PUSH CARTS",
      para: "This time, about 12,000 animal / pushcarts are running on the roads and streets of Quetta City without licenses / permits and creating acute problems in the flow of Traffic causing Traffic disturbance & pollution. Mostly, underage boys are running these carts, which is dangerous for the lives of general public. In this connection, Traffic Police had sent its suggestion to the concerned Authorities that if maximum (6) numbers of animal carts are granted permits for one commercial road, then the total number of permits in Quetta City would not exceed from 350 to 400.",
      anotherpara: "At the same time push carts should be restricted to the residential areas instead of moving in commercial areas. This will also play its part in traffic improvement.",
    },
    {
      title: "ROAD LINING AND ZEBRA TRAFFIC/ SIGNS",
      para: "For effective Traffic control and discipline, the line marking/zebra crossing and Traffic signs on all main roads is the need of hour. In the past, Government had marked some roads many times for said purpose but due to poor quality of paint those lines vanished within few days. Good quality work should be ensured. The Deputy Commissioner Quetta has already been requested on the subject again and again.",
    },
    {
      title: "TRAFFIC SIGNALS",
      para: "During the last  Eight years the following Eight (8) new Traffic Signals were installed on the different points in the City but out of these Two are functional and the remaining are un-functional due to technical fault. Several correspondence were made with DC/Commissioner Quetta and DG QTA time to time but  in vain and Traffic is being controlled manually by the Traffic Constables.",
    },
    {
      title: "NARROW ROAD",
      para: "The Quetta City was initially planned for fifty (50) thousand people and the vehicles were in hundreds but now the population/vehicles are in the millions. The present narrow roads were designed after Earth Quake in 1935 according to the then population/vehicles but now these narrow roads are in sufficient for the current heavy Traffic load.",
      anotherpara: "A mechanism into the matter are solicited in order to extend the old Narrow roads.",
      other: "The matter has already been sent to DG Q.D.A vide this office memo No. 2069-74/R/, dated 16-04-2011 to include in Quetta Master Plan and also approached Commissioner Quetta vide this office memo:No.3846-50/R dated 01-07-2011."
    },
    {
      title: "NON AVAILABILITY OF PARKING FACILITIES",
      para: "The Parking is the main problem in Quetta City. Many Plazas, Markets, Hospitals, Shopping Centers, Educational Institutes, Hotels, etc have been constructed without parking facilities. The vehicles are being parked on the main road due to which, the Traffic problem is being faced by the General Public. It is the most challenging task and the greatest obstacle for smooth flow of Traffic. Only one   underground parking facility is provided by the Govt: under Baldia Plaza Meezan Chowk and some temporary private paid parking facilities are also available in the city but these existing parking facilities do not fulfill the requirement of present Traffic load in the City.The matter has already been sent to DG Q.D.A vide this office memo No. 2069-74/R/, dated 16-04-2011 to include in Quetta Master Plan and also approached Commissioner Quetta vide this office memo:No.3846-50/R dated 01-07-2011.",
    },
    {
      title: "ROAD CONDITION",
      para: "Most of the roads/streets in Quetta City are in deplorable condition due to the last heavy rains in Quetta which is causing great inconvenience in smooth flow of Traffic necessary repair of these roads are required to be made on urgent basis. The Deputy Commissioner Quetta has already been requested to repair the road/streets vide this office memo no. 3846-50/R/Master Plan, dated 01-07-2011. The Commissioner Quetta is also approached vide this office memo:No.3846-50/R dated 01-07-2011.",
    },
    {
      title: "LACK OF COORDINATION",
      para: "The coordination from all concerned department i.e Metropolitan City, QDA, PTA, RTA, C&W WASA, Tele Communication, Wapda and SSGC   can play key role for better Traffic management but the co-operation/Co-ordination of these departments are not up to the mark. Neither these departments are playing their due role for Traffic improvement nor implementing the suggestion/proposal given by the Traffic Police. Traffic Police Quetta has already taken up a case for co-operation/co-ordination of above departments vide this office letter No. 2059-68/R, dated 16-04-2011.",
    },
    {
      title: "PROCESSION/ RALLIES",
      para: "Procession/Rallies are mostly taken out by the Political, Religious and Student Parties e.t.c in the City without any programme which also create hurdle in smooth flow of Traffic. In this regard the Traffic Police has requested through newspaper to all political parties, federations and Administration not to take out Rallies/ Procession and Dharna during the Rush/Schools hours from 12:30PM to 03:00 PM but in vain.",
    },
    {
      title: "RICKSHAWS",
      para: "The increasing of Auto Rickshaws has led to unprecedented traffic problems. Approximately 15 thousands Rickshaws permits are issued without consulting Traffic Police which is causing severe Traffic Problems in Quetta City.",
      anotherpara: "Traffic police should be consulted while introducing any new traffic scheme in the city.",
    },
    {
      title: "ENCROACHMENTS",
      para: "It is one of major problem in Quetta City, which is continuously disturbing the flow of Traffic and causing Traffic jams. Although Traffic Police during different operations had removed most of the encroachments but again encroachments has increased on the busiest roads like Liaquat Bazaar, Abdul Sattar Road, Kansi Road, Prince Road, Qandhaari Bazar, Masjid Road, Almo Chowk, Kuchlak, Double Road, Suraj Gang Bazar etc, that needs to be removed from these areas and Traffic Police Quetta has recovered a sum of Rs: 72,050/- as Traffic fine from illegal encroachers. ",
      anotherpara: "In this connection the concerned Departments i.e. City Metropolitan & QDA have also been asked time to time for the removal of this panic problem but no response.",
    },
    {
      title: "TRAFFIC ENGINEERING BUREAU",
      para: "Establishment of Traffic Engineering Bureau is the need of hour. In order to keep a continuous check on roads, building codes, bridges, road designing, signals, road lining, etc, as the same is functioning in other major cities of the Country. In this regard, a case was already moved to defunct City Government Quetta. Moreover, the said case has again been submitted to Commissioner Quetta. And also point out the issue in meeting of Chief Minister held at 30 March 2012.the need of this Bureau.",
    },
    {
      title: "Non Availability of Bus Adda",
      para: " Quetta city being capital of provinces is facing the under mentioned problem  since long and is the main case of Traffic blockade . All local Buses are parked at Jinnah Road due to which Traffic Become jam . It is suggested that some permanent bus adda like (HazarGanji) may be established in different places of the city for smooth flow of Traffic.",
    },
  ];

  return (
    <>
      {/* Header */}
      <ProblemHeader title="Traffic Problem" />

      {/* Main */}
      <div className="problem-cont">
        <div className="problem-main">
          <ul>
            {ProblemData.map((item, index) => (
              <li key={index}>
                <div
                  className="problem-clicker"
                  onClick={() => clickhandle(index)}
                >
                  <h3>{item.title}</h3>
                  <span>
                    <IoIosArrowDown
                    className={click[index] ? "arrowRotate" : ""}
                    />
                  </span>
                </div>
                {click[index] && (
                  <div className="problem-para">
                    <p>{item.para}</p>
                    <br />
                    <p>{item.anotherpara}</p>
                    <p>{item.other}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TrafficProblem;
