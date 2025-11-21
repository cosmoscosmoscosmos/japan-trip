const itineraryData = [
    {
        day: "Day 1",
        date: "11/28 (Fri)",
        events: [
            { time: "06:00", title: "출발", type: "transport", desc: "집 > 수내역 > 인천공항 T1 (06:10까지 도착 목표)" },
            { time: "07:30", title: "인천공항 T1", type: "transport", desc: "입국수속, 면세점 이용" },
            { time: "10:20", title: "비행기 탑승", type: "transport", desc: "ICN > NRT (12:50 도착)" },
            { time: "13:20", title: "도쿄 시내 이동", type: "transport", desc: "스카이라이너 > 우에노역 > 신주쿠역" },
            { time: "14:20", title: "소테츠 프레사 인", type: "stay", desc: "히가시 신주쿠 (3시 체크인)", link: "https://www.google.com/maps/place/Sotetsu+Fresa+Inn+Higashi+Shinjuku/@35.694676,139.706173,17z" },
            { time: "15:30", title: "라멘 타츠노야", type: "food", desc: "신주쿠 오타키바시도리점 (라멘)", link: "https://www.google.com/maps/place/%EB%9D%BC%EB%A9%98+%ED%83%80%EC%B8%A0%EB%85%B8%EC%95%BC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EC%98%A4%ED%83%80%ED%82%A4%EB%B0%94%EC%8B%9C%EB%8F%84%EB%A6%AC%EC%A0%90/@35.6966223,139.6830293,15z/data=!3m1!5s0x60188c926e443f79:0xe703be5031c57376!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188d29d1c0fee5:0x89b973d803e8bcb4!8m2!3d35.6960593!4d139.6983577!16s%2Fg%2F1tdnl37t?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "16:00", title: "이세탄 신주쿠", type: "food", desc: "딸기모찌", link: "https://www.google.com/maps/place/%EC%9D%B4%EC%84%B8%ED%83%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0/@35.6915783,139.7020717,17z/data=!3m2!4b1!5s0x60188cdbba93fca1:0x6a4d3d03b715d740!4m6!3m5!1s0x60188cdba56b3bf7:0x8b741cc73341edb5!8m2!3d35.691574!4d139.7046466!16s%2Fg%2F11cjk548y6?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "16:30", title: "AALIYA COFFEE", type: "cafe", desc: "프렌치 토스트 맛집", link: "https://www.google.com/maps/place/AALIYA+COFFEE+ROASTERS/@35.6904211,139.7022635,17z/data=!3m1!5s0x60188cdb13fece37:0x83ea2607f2634bb9!4m7!3m6!1s0x60188dc66e60d485:0xa739d82b556c106!8m2!3d35.6904168!4d139.7048384!10e9!16s%2Fg%2F11r86hbz7f?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "17:30", title: "긴자 웨스트", type: "cafe", desc: "아오야마가든 (디저트)", link: "https://www.google.com/maps/place/%EA%B8%B4%EC%9E%90+%EC%9B%A8%EC%8A%A4%ED%8A%B8+%EC%95%84%EC%98%A4%EC%95%BC%EB%A7%88%EA%B0%80%EB%93%A0/@35.6668733,139.7221042,17z/data=!3m1!5s0x60188b7c546dac0f:0x4604e969f2741336!4m15!1m8!3m7!1s0x60188b7c53ec508d:0x759d243a86c5cd5b!2z6ri07J6QIOybqOyKpO2KuCDslYTsmKTslbzrp4jqsIDrk6A!8m2!3d35.666869!4d139.7246791!10e9!16s%2Fg%2F1vb9d0_6!3m5!1s0x60188b7c53ec508d:0x759d243a86c5cd5b!8m2!3d35.666869!4d139.7246791!16s%2Fg%2F1vb9d0_6?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "18:20", title: "긴자 쇼핑", type: "shop", desc: "무인양품, 유니클로, 이토야", link: "https://www.google.com/maps/place/%EB%AC%B4%EC%9D%B8%EC%96%91%ED%92%88+%EA%B8%B4%EC%9E%90/@35.6732183,139.7627928,17z/data=!3m2!4b1!5s0x60188be4497e80d7:0x23149c020d4702aa!4m6!3m5!1s0x60188baa38aecf7d:0xab5a3452172b5f9!8m2!3d35.673214!4d139.7653677!16s%2Fg%2F11fk8hrrq5?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "19:50", title: "우나기 나루세", type: "food", desc: "롯폰기 (장어덮밥)", link: "https://www.google.com/maps/place/%EC%9A%B0%EB%82%98%EA%B8%B0+%EB%82%98%EB%A3%A8%EC%84%B8/@35.6616997,139.7163306,15z/data=!4m12!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m7!1s0x60188b0a9c0f85f5:0x93e81e408a6491c7!8m2!3d35.6616997!4d139.735385!9m1!1b1!16s%2Fg%2F11l244drfg?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "20:40", title: "롯폰기 일루미네이션", type: "sight", desc: "야경 감상 후 숙소 복귀", link: "https://www.google.com/maps/place/Roppongi+Hills/@35.660464,139.729249,17z" }
        ]
    },
    {
        day: "Day 2",
        date: "11/29 (Sat)",
        events: [
            { time: "08:30", title: "이동", type: "transport", desc: "숙소 > 요요기 우에하라" },
            { time: "09:00", title: "nadoya no katte", type: "cafe", desc: "느좋카 (카페)", link: "https://www.google.com/maps/place/nadoya+no+katte/@35.6690069,139.6771583,17z/data=!4m14!1m7!3m6!1s0x6018f347ed5136db:0xf2611920491aebae!2z7JqU7JqU6riw7Jqw7JeQ7ZWY6528!8m2!3d35.6690026!4d139.6797332!16s%2Fm%2F027nrr1!3m5!1s0x6018f36fd56d2b7f:0x98ffe56e834f133e!8m2!3d35.6709328!4d139.6807387!16s%2Fg%2F11nnts9_zd?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "09:50", title: "365일", type: "food", desc: "소금빵 맛집", link: "https://www.google.com/maps/place/365%EC%9D%BC/@35.6696432,139.6844324,17z/data=!3m1!5s0x6018f34b6ecd6c81:0x7a08fd67ab1242df!4m15!1m7!3m6!1s0x6018f347ed5136db:0xf2611920491aebae!2z7JqU7JqU6riw7Jqw7JeQ7ZWY6528!8m2!3d35.6690026!4d139.6797332!16s%2Fm%2F027nrr1!3m6!1s0x60188cbed07bffff:0x855a87bbc8dd4869!8m2!3d35.6697745!4d139.6895609!10e9!16s%2Fg%2F11ckqr84jm?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "10:30", title: "LOST AND FOUND", type: "shop", desc: "잡화점", link: "https://www.google.com/maps/place/LOST+AND+FOUND+TOKYO+STORE/@35.6708884,139.6807333,16z/data=!3m1!5s0x60188cb2c48e698f:0x738ba789ee49219d!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188d30dd0b0407:0x296a6220a6d70307!8m2!3d35.6670268!4d139.6920491!16s%2Fg%2F11s0wcyk38?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "11:00", title: "DISHES", type: "shop", desc: "주방용품점", link: "https://www.google.com/maps/place/DISHES+(%E3%83%87%E3%82%A3%E3%83%83%E3%82%B7%E3%83%BC%E3%82%BA)/@35.6708884,139.6807333,16z/data=!3m1!5s0x60188cb2bc67c7df:0xae2c69ff8cea2527!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188d8ba55fe259:0x936f4e0d6f7ff7a1!8m2!3d35.6662384!4d139.6921798!16s%2Fg%2F11kgb_lfbq?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "11:40", title: "돈카츠 타케신", type: "food", desc: "돈카츠", link: "https://www.google.com/maps/place/%EB%8F%88%EC%B9%B4%EC%B8%A0+%ED%83%80%EC%BC%80%EC%8B%A0/@35.6690233,139.6819443,15z/data=!3m1!5s0x6018f3483aa2b021:0xfeff186a25d4078a!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x6018f3483ab704e5:0x4de2dca88a7500df!8m2!3d35.6702979!4d139.6827745!16s%2Fg%2F1wf21x9n?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "12:30", title: "나타 데 크리스티아노", type: "food", desc: "에그타르트", link: "https://www.google.com/maps/place/%EB%82%98%ED%83%80+%EB%8D%B0+%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8B%B0%EC%95%84%EB%85%B8/@35.6708884,139.6807333,16z/data=!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188cb2d4849701:0x6ef95e34fbd45b7e!8m2!3d35.6672535!4d139.6912879!16s%2Fg%2F11b76hqfxx?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "13:00", title: "COS / Found MUJI", type: "shop", desc: "쇼핑", link: "https://www.google.com/maps/place/COS/@35.6681866,139.6839184,15z/data=!3m1!5s0x60188b61a3756453:0xfd2d3312d11310ac!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188b61a37799a3:0x63c5caea4023804b!8m2!3d35.6636127!4d139.7151393!16s%2Fg%2F11b6gjbhc7?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "14:30", title: "개인 일정", type: "etc", desc: "각자 시간 보내기", link: "" },
            { time: "19:30", title: "재회", type: "etc", desc: "은서동휘 다시 만나기", link: "" },
            { time: "20:00", title: "시부야 구경", type: "sight", desc: "구경 후 숙소 복귀", link: "" },
            { time: "Night", title: "호루몬야키 코우에이", type: "food", desc: "신주쿠본점 (야끼니꾸)", link: "https://www.google.com/maps/place/%ED%98%B8%EB%A3%A8%EB%AA%AC%EC%95%BC%ED%82%A4+%EC%BD%94%EC%9A%B0%EC%97%90%EC%9D%B4+%EC%8B%A0%EC%A3%BC%EC%BF%A0%EB%B3%B8%EC%A0%90/@35.6978861,139.6875177,15z/data=!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188cdf4a951c9f:0x23ca48839050495d!8m2!3d35.6978861!4d139.7065721!16s%2Fg%2F1tnmrqr1?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" }
        ]
    },
    {
        day: "Day 3",
        date: "11/30 (Sun)",
        events: [
            { time: "07:00", title: "디즈니씨 이동", type: "transport", desc: "숙소 > 디즈니씨" },
            { time: "All Day", title: "디즈니씨", type: "sight", desc: "신나게 놀기! 🏰", link: "https://www.google.com/maps/place/Tokyo+DisneySea/@35.62667,139.88806,15z" },
            { time: "20:30", title: "이타마에스시", type: "food", desc: "신바시 (스시)", link: "https://www.google.com/maps/place/%EC%9D%B4%ED%83%80%EB%A7%88%EC%97%90%EC%8A%A4%EC%8B%9C+%EC%8B%A0%EB%B0%94%EC%8B%9C/@35.6546002,139.782059,13z/data=!3m1!5s0x60188bea4847a179:0xac9c7aba4255e762!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188bea481162b3:0x412ffefc040d9d46!8m2!3d35.6654369!4d139.7562303!16s%2Fg%2F11f537cngf?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" }
        ]
    },
    {
        day: "Day 4",
        date: "12/01 (Mon)",
        events: [
            { time: "09:30", title: "체크아웃", type: "etc", desc: "기상 및 체크아웃" },
            { time: "11:00", title: "교엔 로안", type: "food", desc: "생선구이 (예약 확인 필요)", link: "https://www.google.com/maps/place/%EA%B5%90%EC%97%94+%EB%A1%9C%EC%95%88/@35.6944823,139.7169993,13z/data=!3m1!5s0x60188cc2e9daa701:0x2a65faba68fbdd05!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188cc2c24f387f:0x650f72ac17dde4d3!8m2!3d35.689733!4d139.7098805!16s%2Fg%2F1tdkb1rn?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "12:00", title: "The Front Room", type: "food", desc: "도쿄역 (프렌치토스트)", link: "https://www.google.com/maps/place/The+Front+Room+Deli+Restaurant+Marunouchi/@35.6881911,139.7566531,15z/data=!3m1!5s0x60188bf9ed64a1bd:0xfb2b8939e84c627a!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188b91f72ecd45:0xd443b1b75ea0df0a!8m2!3d35.6812689!4d139.7638917!16s%2Fg%2F11t9x417fh?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "13:00", title: "도쿄역 구경", type: "sight", desc: "Tokyo Okashi Land (자가비), 5 Crossties Coffee", link: "https://www.google.com/maps/place/Tokyo+Okashi+Land/@35.6850888,139.7548936,15z/data=!3m1!5s0x60188bfbd91993eb:0x73e0693562fc525a!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188bfc0b562311:0xc473dc904e92d372!8m2!3d35.680931!4d139.7682387!16s%2Fg%2F11h9w4fdyr?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "16:00", title: "우에노역 이동", type: "transport", desc: "공항 이동 준비" },
            { time: "19:50", title: "비행기 탑승", type: "transport", desc: "NRT T3 > ICN (22:50 도착)" },
            { time: "23:00", title: "귀가", type: "transport", desc: "인천 > 서현 > 수내" }
        ]
    }
];

const timelineContainer = document.getElementById('timeline-container');
const mapContainer = document.getElementById('map-container');
const navBtns = document.querySelectorAll('.nav-btn');
const btnList = document.getElementById('btn-list');
const btnMap = document.getElementById('btn-map');

let map;
let markers = [];
let polyline;
let currentDayIndex = 0;

// Helper: Extract coordinates from Google Maps URL
function extractCoords(url) {
    if (!url) return null;
    // Pattern 1: @lat,lng
    const match1 = url.match(/@([\d.]+),([\d.]+)/);
    if (match1) return [parseFloat(match1[1]), parseFloat(match1[2])];

    // Pattern 2: !3dlat!4dlng
    const match2 = url.match(/!3d([\d.]+)!4d([\d.]+)/);
    if (match2) return [parseFloat(match2[1]), parseFloat(match2[2])];

    return null;
}

function renderTimeline(dayIndex) {
    const dayData = itineraryData[dayIndex];
    timelineContainer.innerHTML = ''; // Clear current content

    dayData.events.forEach(event => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        const linkHtml = event.link ? `<a href="${event.link}" target="_blank" class="map-btn">📍 Google Maps</a>` : '';
        const tagHtml = `<span class="tag">${event.type.toUpperCase()}</span>`;

        item.innerHTML = `
            <div class="time-col">${event.time}</div>
            <div class="content-col ${event.type}">
                <h3>${event.title} ${tagHtml}</h3>
                <div class="desc">${event.desc}</div>
                ${linkHtml}
            </div>
        `;
        timelineContainer.appendChild(item);
    });
}

function initMap() {
    if (map) return; // Already initialized
    map = L.map('map').setView([35.6895, 139.6917], 13); // Default to Tokyo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

function updateMap(dayIndex) {
    if (!map) initMap();

    // Clear existing
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    if (polyline) map.removeLayer(polyline);

    const dayData = itineraryData[dayIndex];
    const coords = [];

    dayData.events.forEach(event => {
        const latLng = extractCoords(event.link);
        if (latLng) {
            const marker = L.marker(latLng)
                .addTo(map)
                .bindPopup(`<b>${event.title}</b><br>${event.desc}`);
            markers.push(marker);
            coords.push(latLng);
        }
    });

    if (coords.length > 0) {
        polyline = L.polyline(coords, { color: 'blue', weight: 4, opacity: 0.7, dashArray: '10, 10' }).addTo(map);
        map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
    } else {
        // Default view if no coords
        map.setView([35.6895, 139.6917], 13);
    }
}

// Initial Render
renderTimeline(0);

// Event Listeners
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentDayIndex = btn.getAttribute('data-day');
        renderTimeline(currentDayIndex);

        // Only update map if it's currently visible
        if (mapContainer.classList.contains('active')) {
            updateMap(currentDayIndex);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// View Toggle Logic
btnList.addEventListener('click', () => {
    btnList.classList.add('active');
    btnMap.classList.remove('active');
    timelineContainer.classList.add('active');
    mapContainer.classList.remove('active');
});

btnMap.addEventListener('click', () => {
    btnMap.classList.add('active');
    btnList.classList.remove('active');
    mapContainer.classList.add('active');
    timelineContainer.classList.remove('active');

    // Map needs resize trigger when becoming visible
    setTimeout(() => {
        if (typeof L === 'undefined') {
            alert('지도 라이브러리(Leaflet)를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.');
            return;
        }
        if (!map) {
            initMap();
        } else {
            map.invalidateSize();
        }
        updateMap(currentDayIndex);
    }, 100);
});
