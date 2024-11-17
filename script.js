const subjects = [
    {
        title: "Science",
        topics: [
            {
                id: 1,
                title: "Chapter 1: Crop Production & Management",
                videos: [{ path: "./Videos/Science/Chapter1.mp4" }]
            },
            {
                id: 2,
                title: "Chapter 2: Microorganisms - Friend & Foe",
                videos: [
                    { path: "./Videos/Science/Chapter2.1.mp4" },
                    { path: "./Videos/Science/Chapter2.2.mp4" }
                ]
            },
            {
                id: 3,
                title: "Chapter 3: Coal & Petroleum",
                videos: [{ path: "./Videos/Science/Chapter3.mp4" }]
            },
            {
                id: 4,
                title: "Chapter 4: Combustion & Flame",
                videos: [{ path: "./Videos/Science/Chapter4.mp4" }]
            },
            {
                id: 5,
                title: "Chapter 5: Conservation of wildlife",
                videos: [{ path: "./Videos/Science/Chapter5.mp4" }]
            },
            {
                id: 6,
                title: "Chapter 6: Reproduction in Animals",
                videos: [{ path: "./Videos/Science/Chapter6.mp4" }]
            },
            {
                id: 7,
                title: "Chapter 7: Reaching the age of Adolosense",
                videos: [{ path: "./Videos/Science/Chapter7.mp4" }]
            },
            {
                id: 8,
                title: "Chapter 8: Force & Pressure",
                videos: [{ path: "./Videos/Science/Chapter8.mp4" }]
            },
            {
                id: 9,
                title: "Chapter 9: Friction",
                videos: [{ path: "./Videos/Science/Chapter9.mp4" }]
            },
            {
                id: 10,
                title: "Chapter 10: Sound",
                videos: [{ path: "./Videos/Science/Chapter10.mp4" }, { path: "./Videos/Science/Chapter10.2.mp4" }]
            },
            {
                id: 11,
                title: "Chapter 11: Chemical Effects of Electricity",
                videos: [{ path: "./Videos/Science/Chapter11.mp4" }]
            },
            {
                id: 12,
                title: "Chapter 12: Some Natural Phenomena",
                videos: [{ path: "./Videos/Science/Chapter12.mp4" }]
            },
            {
                id: 13,
                title: "Chapter 13: Light",
                videos: [{ path: "./Videos/Science/Chapter13.mp4" }]
            }
        ]
    },
    {
        title: "History",
        topics: [
            {
                id: 1,
                title: "Chapter 1: How, When & Where?",
                videos: [{ path: "./Videos/History/Chapter1.mp4" }]
            },
            {
                id: 2,
                title: "Chapter 2: From Trade to Territory",
                videos: [{ path: "./Videos/History/Chapter2.mp4" }]
            },
            {
                id: 3,
                title: "Chapter 3: Ruling the Countryside",
                videos: [{ path: "./Videos/History/Chapter3.mp4" }]
            },
            {
                id: 4,
                title: "Chapter 4: Tribals, Dukus & Vision of the golden age",
                videos: [{ path: "./Videos/History/Chapter4.mp4" }]
            },
            {
                id: 5,
                title: "Chapter 5: When people Rebel",
                videos: [{ path: "./Videos/History/Chapter5.mp4" }]
            },
            {
                id: 6,
                title: "Chapter 6: Civilising the 'Native' education",
                videos: [{ path: "./Videos/History/Chapter6.mp4" }]
            },
            {
                id: 7,
                title: "Chapter 7: Women, Caste & Reform",
                videos: [{ path: "./Videos/History/Chapter7.mp4" }]
            },
            {
                id: 8,
                title: "Chapter 8: The making of the Nation Movement",
                videos: [{ path: "./Videos/History/Chapter8.1.mp4" }, { path: "./Videos/History/Chapter8.2.mp4" }]
            },
        ]
    },
    //Geography
    {
        title: "Geography",
        topics: [
            {
                id: 1,
                title: "Chapter 1: Resources",
                videos: [{ path: "./Videos/Geography/Chapter1.mp4" }]
            },
            {
                id: 2,
                title: "Chapter 2: Land, Soil, Water, Natural Vegetation & wildlife resources",
                videos: [{ path: "./Videos/Geography/Chapter2.mp4" }]
            },
            {
                id: 3,
                title: "Chapter 3: Agriculture",
                videos: [{ path: "./Videos/Geography/Chapter3.mp4" }]
            },
            {
                id: 4,
                title: "Chapter 4: Industries",
                videos: [{ path: "./Videos/Geography/Chapter4.mp4" }]
            },
            {
                id: 5,
                title: "Chapter 5: Human Resources",
                videos: [{ path: "./Videos/Geography/Chapter5.mp4" }]
            }
        ]
    }
];

// Function to populate the topics dynamically based on the selected subject
document.getElementById('Subject').addEventListener('change', function() {
    const selectedSubject = this.value;
    const topicContainer = document.getElementById('topic-container');
    topicContainer.innerHTML = ''; // Clear previous topics

    if (selectedSubject !== 'None') {
        const subject = subjects.find(s => s.title === selectedSubject);
        if (subject) {
            subject.topics.forEach(topic => {
                topic.videos.forEach(video => {
                    const topicCard = document.createElement('div');
                    topicCard.classList.add('topic-card');

                    const videoElement = document.createElement('video');
                    videoElement.setAttribute('controls', '');
                    videoElement.setAttribute('src', video.path);

                    const titleElement = document.createElement('p');
                    titleElement.textContent = topic.title;

                    topicCard.appendChild(videoElement);
                    topicCard.appendChild(titleElement);
                    topicContainer.appendChild(topicCard);
                });
            });
        }
    } else {
        const messageElement = document.createElement('p');
        messageElement.textContent = 'Please select a subject';
        topicContainer.appendChild(messageElement);
    }
});
