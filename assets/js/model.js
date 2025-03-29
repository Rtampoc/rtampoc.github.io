class Info {
    constructor() {
        this.fullname = 'Ralph Lawrence Tampoc';
        this.bday = '22 May 1993';
        this.age = ko.observable(moment().diff(this.bday, 'year'));
        this.Contact = '+63-935-164-3211';
        this.Address = 'B54 L31 Ph3 Villa de Calamba, Brgy. La Mesa, Calamba City, Laguna, 4027';
        this.Degree = 'Bachelor of Science In Information System';
        this.Email = 'rap.tampoc@gmail.com';
        this.website = { Name: 'rtampoc.github.io', Link: 'https://rtampoc.github.io' };
        this.profile = 'assets/img/Profile.jpg';
        this.banner = 'assets/img/BorderPic.jpg';
        this.AboutPicture = 'assets/img/CloseUpSide.jpg';
        this.social = [
            { 
                Name: 'facebook', 
                Link: 'https://www.facebook.com/eytiin.018/', 
                Icon: 'bi bi-facebook',
                Class: 'facebook'
            }, 
            { 
                Name: 'linkedin', 
                Link: 'https://www.linkedin.com/in/ralph-lawrence-tampoc-640b781a2/', 
                Icon: 'bi bi-linkedin',
                Class: 'linkedin'
            },
            { 
                Name: 'instagram', 
                Link: 'https://www.instagram.com/ralpht1221/', 
                Icon: 'bi bi-instagram',
                Class: 'instgram'
            }
        ];
        this.education = [{
            Degree: 'Bachelor of Science in Information System',
            School: 'Colegio de San Juan de Letran - Calamba',
            Year: '2020',
            Address: 'Ipil-ipil Street, Bo. Bucal, Calamba City, Laguna'
        },
        {
            Degree: 'Secondary',
            School: 'Maranatha Christian Academy',
            Year: '2011',
            Address: 'Criscor Compound, Crossing Street, Calamba City, Laguna'
        },
        {
            Degree: 'Primary',
            School: 'Paaralang Elementarya ng Lucban',
            Year: '2007',
            Address: 'Racelis Avenue, Brgy. Ayuti, Lucban, Quezon'
        }];
        this.workExperience = [{
            Company: 'Mayo  Holdings and Construction Inc.',
            Description: 'Developed and maintained robust web applications using ASP.NET MVC framework, ensuring high performance, scalability, and security. Built interactive UI components with Knockout.js and JavaScript, enabling responsive and dynamic client-side experiences. Implemented backend logic in C#, creating efficient APIs and business logic layers to support client requirements. Utilized Razor for designing and rendering server-side views, ensuring seamless integration of front-end and back-end development. Build a Bincard Inventory System, enhancing tracking, item updates, and transaction management functionalities. Optimized database interactions and queries to maintain fast and reliable data retrieval processes.',
            Position: 'Junio Fullstack Developer',
            Duration: 'July 2023 - March 2025',
            Address: 'KM 94 Brgy. Milagrosa Calamba City, Laguna'
        }, {
            Company: 'Accenture Inc.',
            Description: 'SAP ABAP Developer - Investigated, analyzed, and debugged defective programs/objects in the system. Document, analyzed, and report test results. Maintained and provide code fixes to copy programs from the source. Created a new interactive report that displays the Automatch summary and the total number of records that will show the total bank transaction, No. of auto posted transaction and No. of manual transaction details. Involves in language translation of the reports using Adobe forms. SAP FICO - Provide business and functional support for the SAP FI module including its sub-ledgers such as AP, AR and AA. Facilitate requirements gathering workshop/discussions and assess, challenge, and document the business requirements. Provide alternatives and recommend a solution. Work with different teams and IT partners in different parts of the world provide services to clients. Identify and apply continuous improvement processes for operational efficiencies, drive process integration, and standardation',
            Position: 'Associate Software Engineer',
            Duration: 'November 2021 - September 2023',
            Address: 'Uptown Tower 2, 5 East 11th Drive, Uptown Bonifacio 1634 Taguig'
        }, {
            Company: 'Sagara Metro Plastics Industrial Corporation',
            Description: 'Assists in the development of the IT Department’s policies and procedures and recommends to ISMS management for improvement. Assists with activities of system design, implementation, administration and network management. Provide IT support services, troubleshooting and system operation. Developing solutions for existing products and systems. Collaborating with developers, testers and end users to ensure technical compatibility. Participated in the development of enterprise-level application using ASP.NET, C# and SQL. Created and implemented test queries using MS SQL Server. Knowledgeable in troubleshooting of both hardware and software in a windows environment. Basic VMware experience & knowledge to troubleshoot or escalates. Basic knowledge in Excel VBA Macro for automating common repetitive task.',
            Position: 'System Analysts',
            Duration: 'September 2020 - October 2021',
            Address: 'Modern Village, 699 Mayapa, Calamba City, Laguna'
        }];
        this.skills = [{
            Name: 'C# .NET',
            Value: 50
        }, {
            Name: 'Web Development',
            Value: 50
        }, {
            Name: 'SQL Server Database',
            Value: 70
        }, {
            Name: 'Video Editing',
            Value: 50
        }, {
            Name: 'Photoshop',
            Value: 60
        }, {
            Name: 'JQuery',
            Value: 40
        }, {
            Name: 'CSS',
            Value: 45
        }, {
            Name: 'Knockoutjs',
            Value: 40
        }, {
            Name: 'VB .Net',
            Value: 65
        }, {
            Name: 'Software Development',
            Value: 70
        }, {
            Name: 'Java',
            Value: 50
        }, {
            Name: 'SAP FI',
            Value: 40
        }, {
            Name: 'SAP ABAP',
            Value: 55
        }, {
            Name: 'Computer Troubleshooting',
            Value: 80
        }, {
            Name: 'Networking',
            Value: 75
        }];
        this.Projects = [{
            Title: 'Bincard System',
            Description: 'Bincard System is web-based application that helps the companies to manage and track all IT Assets.',
            Imgs: [
                { title: 'Dashboard', src: 'assets/img/Projects/BincardSystem/dashboard.png' },
                { title: 'Item Details', src: 'assets/img/Projects/BincardSystem/details.png' },
                { title: 'Item Activity', src: 'assets/img/Projects/BincardSystem/activity.png' },
            ]
        }, {
            Title: 'PR/DS Release Program - Indirect Purchasing',
            Description: 'PR/DS Release Program is an additional feature of the Purchasing System software designed to assist purchasing staff in releasing the OPR for items.',
            Imgs: [
                { title: 'Main', src: 'assets/img/Projects/PRDSRelease/prdsMain.png' },
                { title: 'Details', src: 'assets/img/Projects/PRDSRelease/prdsDetails.png' },
                { title: 'Records', src: 'assets/img/Projects/PRDSRelease/prdsRecords.png' },
            ]
        }, {
            Title: 'Gateway Changer',
            Description: 'Gateway Changer is software application that help the company to change ip address and gateway instantly.',
            Imgs: [
                { title: 'Gateway Changer', src: 'assets/img/Projects/GatewayChanger/gatewaychanger.png' },
            ]
        }];
        this.randomInterval = function () {
            var min = 1500, max = 5000;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}

function Model() {
    var self = this;
    self.Info = new Info();
}

ko.applyBindings(new Model());
