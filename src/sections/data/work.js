const data = {
    jobs: [
        {
            company: "Bloomberg PolarLake",
            image: require("../img/BPL.png"),
            position: "Software Engineering Internship",
            duration: "Apr 2018 - Sep 2018",
            details: [
                "Carried out service performance testing",
                "Bug fixing and improvements to business logic",
                "Generating graphs and reports from JSON input",
                "Developed a query service controller & UI using Java & Angular 6",
                "Investigated Apache Cassandra implementation with existing file store",
            ],
        },
        {
            company: "Life-Cycle Ltd.",
            image: require("../img/Life-Cycle-ltd.png"),
            position: "Warehouse Operative",
            duration: "Summer of 2015, 2016, 2017",
            details: [
                "Inventory Management (In/Out)",
                "Reorganised Warehouse for maximum efficiency",
                "Sales for promotional sporting events"
            ],
        },
        {
            company: "Hibernia Networks",
            image: require("../img/Hibernia.png"),
            position: "2 Week Internship",
            duration: "July 2016",
            details: [
                "Built a fibre network with Add-drop Multiplexers",
                "Built and troubleshooted a peer to peer fibre network with trunk and access ports",
                "Observed the techniques used when looking for problems in a large fibre network"
            ],
        },
    ]
}

export default data
