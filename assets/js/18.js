function playlistMe() {
    const videos = document.querySelector(".videos");
    const totalTime = document.querySelector(".totalTime");
    var selectedVideos = [];

    const videosMetaData = [
        {
            name: "Video 0",
            time: "5:43",
            done: false,
        },
        {
            name: "Video 1",
            time: "2:23",
            done: false,
        },
        {
            name: "Video 2",
            time: "3:45",
            done: false,
        },
        {
            name: "Video 3",
            time: "9:47",
            done: false,
        },
        {
            name: "Video 4",
            time: "5:21",
            done: false,
        },
        {
            name: "Video 5",
            time: "6:56",
            done: false,
        },
        {
            name: "Video 6",
            time: "3:47",
            done: false,
        },
        {
            name: "Video 7",
            time: "5:25",
            done: false,
        },
        {
            name: "Video 8",
            time: "3:14",
            done: false,
        },
        {
            name: "Video 9",
            time: "3:33",
            done: false,
        },
        {
            name: "Video 10",
            time: "5:59",
            done: false,
        },
        {
            name: "Video 11",
            time: "3:07",
            done: false,
        },
        {
            name: "Video 12",
            time: "11:29",
            done: false,
        },
        {
            name: "Video 13",
            time: "8:57",
            done: false,
        },
        {
            name: "Video 14",
            time: "5:49",
            done: false,
        },
        {
            name: "Video 15",
            time: "5:52",
            done: false,
        },
        {
            name: "Video 16",
            time: "5:50",
            done: false,
        },
        {
            name: "Video 17",
            time: "9:13",
            done: false,
        },
        {
            name: "Video 18",
            time: "11:51",
            done: false,
        },
        {
            name: "Video 19",
            time: "7:58",
            done: false,
        },
        {
            name: "Video 20",
            time: "4:40",
            done: false,
        },
    ];
    videos.innerHTML = videosMetaData
        .map((data, i) => {
            return `
                    <li data-time=${data.time}>
                    <input type="checkbox"  data-index=${i} id="item${i}" ${
                data.done ? "checked" : ""
            }/>
                    <label for="item${i}">${data.name}</label><sub>${
                data.time
            }</sub>
                    </li>
                `;
        })
        .join("");

    function calculateTime(timeNodes) {
        const seconds = timeNodes
            .map((node) => (node.done ? node.time : "0:0"))
            .map((timeCode) => {
                const [min, sec] = timeCode.split(":").map(parseFloat);
                return min * 60 + sec;
            })
            .reduce((total, vidSecond) => {
                return total + vidSecond;
            });

        let secondsLeft = seconds;
        const hours = Math.floor(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;
        const minutes = Math.floor(secondsLeft / 60);
        secondsLeft = secondsLeft % 60;
        totalTime.innerHTML = `Total Time - ${hours}:${minutes}:${secondsLeft}`;
    }

    function toggleDone(e) {
        if (!e.target.matches("input")) return;
        const element = e.target.parentNode;
        const index = e.target.dataset.index;
        videosMetaData[index].done = !videosMetaData[index].done;
        selectedVideos[index] = videosMetaData[index];
        calculateTime(selectedVideos);
    }
    videos.addEventListener("click", toggleDone);
}
window.addEventListener("DOMContentLoaded", playlistMe);
