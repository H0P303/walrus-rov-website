//Styles
import "../../Styles/Style.scss"


//Sources
import Pics from "./pics"

function ObjectRender() {
    const data = [
        {   //1
            title: "1. Organizing Supplies",
            bodyText: "The project began with us going through the material supplied by Camosun Innovates. This included an ROV, a pelican case with a monitor, a 100ft tether, and multiple spare parts and accessories that we would come to use during the project.",
            image: [Pics.ControlStationCase, Pics.ROV]
        },
        {   //2
            title: "2. Initial Proof of Concept & Testing",
            bodyText: "The next step in the project was to test the individual components and systems that we required. This involved multiple weeks of developing the early stages of what would become our final product. We used STM32F407 development boards as a test platform before our PCBs had been finalized and ordered.",
            image: [Pics.TestBed]
        },
        {   //3
            title: "3. System Integration",
            bodyText: "Once we had proved to ourselves that the individual systems such as the wireless transceivers, sensors, etc worked, it was time to test the entire system as one. This proved more difficult than expected but with perseverance we made it work.",
            image: [Pics.EndToEndTest]
        },
        {   //4
            title: "4. First Motor Test",
            bodyText: "At this stage of the project we had proved that the overall system worked together. The next step was testing the system with the ROV to see how it would work. This also included measuring the current draw of the motors in order to allow for a proper PCB design.",
            image: [Pics.MotorControlTest, Pics.CurrentDrawTest]
        },
        {   //5
            title: "5. PCBs Arrived",
            bodyText: "After ordering the PCBs in week 5 of the project we spent most of our time working on more miscellaneous tasks. The PCBs arrived from JLC PCB in week 8 and we quickly began soldering our components so that we could begin testing with them.",
            image: [Pics.ROVPCBDesign, Pics.ROVPCBFront, Pics.ROVPCBBack, Pics.ControlPCBDesign, Pics.ControlPCBFront, Pics.ControlPCBBack]
        },
        {   //6
            title: "6. Initial Assembly & Testing",
            bodyText: "Once our PCBs had been soldered we quickly began assembling the ROV and all of its components. The image below is from our first fully functioning water test.",
            image: [Pics.ROVInTheDark]
        },
        {   //7
            title: "7. Second Water Test",
            bodyText: "For our second water test, our goal was to begin fine tuning the control of the ROV as well as to get some footage of it working. We learned a lot of new things that day.",
            image: [Pics.ROVTurtle, Pics.ROVInPool1]
        },
        {   //8
            title: "8. Third Water Test",
            bodyText: "Our third water test was conducted at Todd Inlet. This day was mainly used for collecting footage that we could use on the symposium day.",
            image: [Pics.ROVTodd1, Pics.ROVTodd2, Pics.ROVTodd3, Pics.ROVTodd4, Pics.ROVTodd5]
        },
    ]

    const tiles = data.map(e => {

        return (
            <div className="Content">
                <h3 id="title">{e.title}</h3>
                <p>{e.bodyText}</p>
                <div id="imgContainer">
                    <img id="y" src={e.image[0]} alt="stuff is here"/>
                    {/* <img id="y" src={setInterval(ImageShow, 1500)} alt="stuff is here"/> */}
                </div>
            </div>
        )
    });

    return (
        <div className="ContentContainer">
            {tiles}
        </div>
    )
}

export default function TimeLinePage() {

    return (
        <div className="TimeLineContainer">
            <ObjectRender />
        </div>
        
    );
}