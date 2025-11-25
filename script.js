const itineraryData = [
    {
        day: "Day 1",
        date: "11/28 (Fri)",
        events: [
            { time: "06:00", title: "출발", type: "transport", desc: "집 > 수내역 > 인천공항 T1 (06:10까지 도착 목표)" },
            { time: "07:30", title: "인천공항 T1", type: "transport", desc: "입국수속, 면세점 이용" },
            { time: "10:20", title: "비행기 탑승", type: "transport", desc: "ICN > NRT (12:50 도착)" },
            { time: "12:50", title: "나리타공항 T2", type: "transport", desc: "입국 심사 및 이동" },
            { time: "13:55", title: "긴자 이동", type: "transport", desc: "1300엔 버스 탑승 (15:20 도착 예정)" },
            { time: "15:20", title: "긴자 짐 보관", type: "etc", desc: "짐 보관소 이용", link: "https://www.notion.so/JP-275-716-2b4ffa07e59b81ff801fed5fa54145a6?pvs=21" },
            { time: "15:40", title: "긴자 나가노", type: "shop", desc: "구경", link: "https://www.google.com/maps/place/%EA%B8%B4%EC%9E%90+%EB%82%98%EA%B0%80%EB%85%B8+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EC%83%B5/@35.6712162,139.7620202,18z/data=!3m1!5s0x60188be6433f336f:0xe3c22ce46c064d07!4m10!1m2!2m1!1z6ri07J6QIOuCmOqwgOuFuA!3m6!1s0x60188be674473ffb:0x51bd8357d33978d8!8m2!3d35.6712162!4d139.7640801!15sChDquLTsnpAg64KY6rCA64W4WhIiEOq4tOyekCDrgpjqsIDrhbiSAQ5zb3V2ZW5pcl9zdG9yZeABAA!16s%2Fg%2F11b6jd13_d?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" },
            { time: "16:00", title: "라멘", type: "food", desc: "긴자역 주변 라멘 (스웩으로)" },
            { time: "16:00", title: "유니클로 / GU", type: "shop", desc: "유니클로 긴자점, GU", link: "https://www.google.com/maps/place/%EC%9C%A0%EB%8B%88%ED%81%B4%EB%A1%9C+%EA%B8%B4%EC%9E%90%EC%A0%90/@35.6702491,139.7608937,17z/data=!3m2!4b1!5s0x60188be616e4127b:0xb343ddf465dffb5!4m6!3m5!1s0x60188be66e07d36f:0x45e536859ebe18d3!8m2!3d35.6702448!4d139.7634686!16s%2Fg%2F1th8736p?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "17:30", title: "디저트 타임", type: "cafe", desc: "디저트 먹기" },
            { time: "18:20", title: "긴자 이토야", type: "shop", desc: "문구점 구경", link: "https://www.google.com/maps/place/%EA%B8%B4%EC%9E%90+%EC%9D%B4%ED%86%A0%EC%95%BC/@35.6731316,139.7646389,17z/data=!3m2!4b1!5s0x60188be3ffe68253:0xe2a1bd0be48b01e2!4m6!3m5!1s0x60188be4000a0029:0x8a7da075396968c0!8m2!3d35.6731273!4d139.7672138!16s%2Fg%2F1tdd9vcz?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "19:20", title: "무인양품 긴자", type: "shop", desc: "쇼핑", link: "https://www.google.com/maps/place/%EB%AC%B4%EC%9D%B8%EC%96%91%ED%92%88+%EA%B8%B4%EC%9E%90/@35.6732183,139.7627928,17z/data=!3m2!4b1!5s0x60188be4497e80d7:0x23149c020d4702aa!4m6!3m5!1s0x60188baa38aecf7d:0xab5a3452172b5f9!8m2!3d35.673214!4d139.7653677!16s%2Fg%2F11fk8hrrq5?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "20:00", title: "장어덮밥", type: "food", desc: "웨이팅 없는 곳 찾아서" },
            { time: "20:40", title: "롯폰기 이동", type: "transport", desc: "긴자 > 롯폰기" },
            { time: "21:00", title: "롯폰기 일루미네이션", type: "sight", desc: "야경 감상", link: "https://www.google.com/maps/place/Roppongi+Hills/@35.660464,139.729249,17z" },
            { time: "Night", title: "숙소 복귀", type: "transport", desc: "롯폰기 > 긴자(짐 찾기) > 숙소" }
        ]
    },
    {
        day: "Day 2",
        date: "11/29 (Sat)",
        events: [
            { time: "08:00", title: "기상", type: "etc", desc: "외출 준비" },
            { time: "08:30", title: "이동", type: "transport", desc: "숙소 > 요요기 우에하라" },
            { time: "09:00", title: "nadoya no katte", type: "cafe", desc: "느좋카 (카페)", link: "https://www.google.com/maps/place/nadoya+no+katte/@35.6690069,139.6771583,17z/data=!4m14!1m7!3m6!1s0x6018f347ed5136db:0xf2611920491aebae!2z7JqU7JqU6riw7Jqw7JeQ7ZWY6528!8m2!3d35.6690026!4d139.6797332!16s%2Fm%2F027nrr1!3m5!1s0x6018f36fd56d2b7f:0x98ffe56e834f133e!8m2!3d35.6709328!4d139.6807387!16s%2Fg%2F11nnts9_zd?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "09:50", title: "365일", type: "food", desc: "소금빵 맛집", link: "https://www.google.com/maps/place/365%EC%9D%BC/@35.6696432,139.6844324,17z/data=!3m1!5s0x6018f34b6ecd6c81:0x7a08fd67ab1242df!4m15!1m7!3m6!1s0x6018f347ed5136db:0xf2611920491aebae!2z7JqU7JqU6riw7Jqw7JeQ7ZWY6528!8m2!3d35.6690026!4d139.6797332!16s%2Fm%2F027nrr1!3m6!1s0x60188cbed07bffff:0x855a87bbc8dd4869!8m2!3d35.6697745!4d139.6895609!10e9!16s%2Fg%2F11ckqr84jm?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "10:30", title: "LOST AND FOUND", type: "shop", desc: "잡화점", link: "https://www.google.com/maps/place/LOST+AND+FOUND+TOKYO+STORE/@35.6708884,139.6807333,16z/data=!3m1!5s0x60188cb2c48e698f:0x738ba789ee49219d!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188d30dd0b0407:0x296a6220a6d70307!8m2!3d35.6670268!4d139.6920491!16s%2Fg%2F11s0wcyk38?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "11:00", title: "DISHES", type: "shop", desc: "주방용품점", link: "https://www.google.com/maps/place/DISHES+(%E3%83%87%E3%82%A3%E3%83%83%E3%82%B7%E3%83%BC%E3%82%BA)/@35.6708884,139.6807333,16z/data=!3m1!5s0x60188cb2bc67c7df:0xae2c69ff8cea2527!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188d8ba55fe259:0x936f4e0d6f7ff7a1!8m2!3d35.6662384!4d139.6921798!16s%2Fg%2F11kgb_lfbq?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "11:40", title: "돈카츠 타케신", type: "food", desc: "돈카츠", link: "https://www.google.com/maps/place/%EB%8F%88%EC%B9%B4%EC%B8%A0+%ED%83%80%EC%BC%80%EC%8B%A0/@35.6690233,139.6819443,15z/data=!3m1!5s0x6018f3483aa2b021:0xfeff186a25d4078a!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x6018f3483ab704e5:0x4de2dca88a7500df!8m2!3d35.6702979!4d139.6827745!16s%2Fg%2F1wf21x9n?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "12:30", title: "나타 데 크리스티아노", type: "food", desc: "에그타르트", link: "https://www.google.com/maps/place/%EB%82%98%ED%83%80+%EB%8D%B0+%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8B%B0%EC%95%84%EB%85%B8/@35.6708884,139.6807333,16z/data=!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188cb2d4849701:0x6ef95e34fbd45b7e!8m2!3d35.6672535!4d139.6912879!16s%2Fg%2F11b76hqfxx?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "13:00", title: "COS", type: "shop", desc: "쇼핑", link: "https://www.google.com/maps/place/COS/@35.6681866,139.6839184,15z/data=!3m1!5s0x60188b61a3756453:0xfd2d3312d11310ac!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188b61a37799a3:0x63c5caea4023804b!8m2!3d35.6636127!4d139.7151393!16s%2Fg%2F11b6gjbhc7?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "13:30", title: "Found MUJI Aoyama", type: "shop", desc: "느좋무지", link: "https://www.google.com/maps/place/%EF%BC%A6%EF%BD%8F%EF%BD%95%EF%BD%8E%EF%BD%84+%EF%BC%AD%EF%BC%B5%EF%BC%AA%EF%BC%A9+%E9%9D%92%E5%B1%B1/@35.6681866,139.6839184,15z/data=!3m1!5s0x60188b5f8e69f8b7:0x3681182ab2c58012!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188b5f8e737217:0xc07b8ba9c0f2b12b!8m2!3d35.6629471!4d139.7098957!16s%2Fg%2F1tfjw84b?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "14:30", title: "개인 일정", type: "etc", desc: "각자 시간 보내기" },
            { time: "19:30", title: "재회", type: "etc", desc: "은서동휘 다시 만나기" },
            { time: "20:00", title: "시부야 구경", type: "sight", desc: "가챠, 구경 후 숙소 복귀" },
            { time: "Night", title: "우오베이 신오쿠보점", type: "food", desc: "스시", link: "https://www.google.com/maps/place/%EC%9A%B0%EC%98%A4%EB%B2%A0%EC%9D%B4+%EC%8B%A0%EC%98%A4%EC%BF%A0%EB%B3%B8%EC%A0%90/@35.7089162,139.7050947,17z/data=!3m1!5s0x60188d2f3f574f09:0x89e79b859e898f!4m10!1m2!2m1!1z7Jqw7Jik67Kg7J20!3m6!1s0x60188d1f05082f87:0x8d1e7eff439586ae!8m2!3d35.7016721!4d139.7000322!15sCgzsmrDsmKTrsqDsnbRaDyIN7JqwIOyYpOuyoOydtJIBF2Nhc3VhbF9zdXNoaV9yZXN0YXVyYW504AEA!16s%2Fg%2F11s3xg3pjn?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" }
        ]
    },
    {
        day: "Day 3",
        date: "11/30 (Sun)",
        events: [
            { time: "06:30", title: "기상", type: "etc", desc: "외출 준비" },
            { time: "07:00", title: "디즈니씨 이동", type: "transport", desc: "숙소 > 디즈니씨" },
            { time: "All Day", title: "디즈니씨", type: "sight", desc: "신나게 놀기! 🏰", link: "https://www.google.com/maps/place/Tokyo+DisneySea/@35.62667,139.88806,15z" },
            { time: "20:30", title: "호루몬야키 코우에이", type: "food", desc: "신주쿠본점 (야끼니꾸)", link: "https://www.google.com/maps/place/%ED%98%B8%EB%A3%A8%EB%AA%AC%EC%95%BC%ED%82%A4+%EC%BD%94%EC%9A%B0%EC%97%90%EC%9D%B4+%EC%8B%A0%EC%A3%BC%EC%BF%A0%EB%B3%B8%EC%A0%90/@35.6978861,139.6875177,15z/data=!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188cdf4a951c9f:0x23ca48839050495d!8m2!3d35.6978861!4d139.7065721!16s%2Fg%2F1tnmrqr1?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" }
        ]
    },
    {
        day: "Day 4",
        date: "12/01 (Mon)",
        events: [
            { time: "09:30", title: "체크아웃", type: "etc", desc: "기상 및 체크아웃" },
            { time: "11:00", title: "교엔 로안", type: "food", desc: "생선구이 (예약 확인 필요)", link: "https://www.google.com/maps/place/%EA%B5%90%EC%97%94+%EB%A1%9C%EC%95%88/@35.6944823,139.7169993,13z/data=!3m1!5s0x60188cc2e9daa701:0x2a65faba68fbdd05!4m10!1m3!11m2!2sgauBINyroIek02aqmTsYatdDwgOsDw!3e3!3m5!1s0x60188cc2c24f387f:0x650f72ac17dde4d3!8m2!3d35.689733!4d139.7098805!16s%2Fg%2F1tdkb1rn?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "12:30", title: "이세탄 신주쿠", type: "food", desc: "딸기모찌", link: "https://www.google.com/maps/place/%EC%9D%B4%EC%84%B8%ED%83%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0/@35.6915783,139.7020717,17z/data=!3m2!4b1!5s0x60188cdbba93fca1:0x6a4d3d03b715d740!4m6!3m5!1s0x60188cdba56b3bf7:0x8b741cc73341edb5!8m2!3d35.691574!4d139.7046466!16s%2Fg%2F11cjk548y6?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "14:30", title: "AALIYA COFFEE", type: "cafe", desc: "프렌치 토스트 맛집", link: "https://www.google.com/maps/place/AALIYA+COFFEE+ROASTERS/@35.6904211,139.7022635,17z/data=!3m1!5s0x60188cdb13fece37:0x83ea2607f2634bb9!4m7!3m6!1s0x60188dc66e60d485:0xa739d82b556c106!8m2!3d35.6904168!4d139.7048384!10e9!16s%2Fg%2F11r86hbz7f?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" },
            { time: "15:00", title: "이동", type: "transport", desc: "구경 > 짐 찾기 > 역 이동" },
            { time: "16:38", title: "나리타 익스프레스", type: "transport", desc: "신주쿠역 > NRT T3 (17:54 도착)" },
            { time: "19:50", title: "비행기 탑승", type: "transport", desc: "NRT T3 > ICN (22:50 도착)" },
            { time: "23:00", title: "귀가", type: "transport", desc: "인천 > 수내" }
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

// --- New Features Logic ---

// 1. Tab Switching
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const itineraryNav = document.getElementById('itinerary-nav');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');

        // Update Nav UI
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Show Content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');

        // Toggle Itinerary Header Nav
        if (tabId === 'itinerary') {
            itineraryNav.classList.add('active');
        } else {
            itineraryNav.classList.remove('active');
        }
    });
});

// 2. Weather Widget (Mock Data for now)
function updateWeather() {
    // In a real app, fetch from Open-Meteo API
    // https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true
    const weatherIcon = document.getElementById('weather-icon');
    const weatherTemp = document.getElementById('weather-temp');

    // Mocking a nice day in Tokyo
    weatherIcon.textContent = '☀️';
    weatherTemp.textContent = '14°C';
}
updateWeather();

// 3. Couple Missions
const missions = [
    "서로의 엽사 찍어주기 📸",
    "편의점에서 서로에게 어울리는 간식 사주기 🍬",
    "길거리에서 거울 셀카 찍기 🪞",
    "서로 칭찬 3가지 해주기 💖",
    "자판기 앞에서 동전 던지기 내기 🪙",
    "가장 마음에 드는 풍경 앞에서 하트 포즈 🫶"
];

const missionText = document.getElementById('mission-text');
const refreshMissionBtn = document.getElementById('refresh-mission');
const completeMissionBtn = document.getElementById('complete-mission');

function setRandomMission() {
    const random = missions[Math.floor(Math.random() * missions.length)];
    missionText.textContent = random;
    localStorage.setItem('currentMission', random);
}

refreshMissionBtn.addEventListener('click', setRandomMission);

completeMissionBtn.addEventListener('click', () => {
    alert('미션 성공! 💖 추억 +1');
    setRandomMission();
});

// Load saved mission or set new one
const savedMission = localStorage.getItem('currentMission');
if (savedMission) {
    missionText.textContent = savedMission;
} else {
    setRandomMission();
}

// 4. Journal Logic
const journalFeed = document.getElementById('journal-feed');
const addJournalBtn = document.getElementById('add-journal-btn');
const journalModal = document.getElementById('journal-modal');
const closeJournalBtn = document.getElementById('close-journal');
const saveJournalBtn = document.getElementById('save-journal');
const journalInput = document.getElementById('journal-input');
const journalImageInput = document.getElementById('journal-image');

let journals = JSON.parse(localStorage.getItem('journals')) || [];

function renderJournals() {
    journalFeed.innerHTML = '';
    journals.forEach((journal, index) => {
        const div = document.createElement('div');
        div.className = 'journal-item';

        const imgHtml = journal.image ? `<img src="${journal.image}" class="journal-img" alt="Memory">` : '';

        div.innerHTML = `
            <button class="delete-btn" onclick="deleteJournal(${index})">🗑️</button>
            <div class="journal-date">${journal.date}</div>
            <div class="journal-text">${journal.text}</div>
            ${imgHtml}
        `;
        journalFeed.prepend(div);
    });
}

window.deleteJournal = function (index) {
    if (confirm('정말 삭제하시겠습니까?')) {
        journals.splice(index, 1);
        localStorage.setItem('journals', JSON.stringify(journals));
        renderJournals();
    }
};

addJournalBtn.addEventListener('click', () => journalModal.classList.remove('hidden'));
closeJournalBtn.addEventListener('click', () => journalModal.classList.add('hidden'));

saveJournalBtn.addEventListener('click', () => {
    const text = journalInput.value;
    const file = journalImageInput.files[0];

    if (!text && !file) return;

    const saveEntry = (imgData) => {
        const newJournal = {
            text: text,
            date: new Date().toLocaleString('ko-KR'),
            image: imgData
        };

        journals.push(newJournal);
        localStorage.setItem('journals', JSON.stringify(journals));

        renderJournals();
        journalInput.value = '';
        journalImageInput.value = ''; // Reset file input
        journalModal.classList.add('hidden');
    };

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            saveEntry(e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        saveEntry(null);
    }
});

renderJournals();

// 5. Wallet Logic
const expenseList = document.getElementById('expense-list');
const totalSpentEl = document.getElementById('total-spent');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseModal = document.getElementById('expense-modal');
const closeExpenseBtn = document.getElementById('close-expense');
const saveExpenseBtn = document.getElementById('save-expense');
const expenseDesc = document.getElementById('expense-desc');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

const categoryMap = {
    'food': '식비',
    'transport': '교통',
    'shopping': '쇼핑',
    'etc': '기타'
};

function renderExpenses() {
    expenseList.innerHTML = '';
    let total = 0;

    expenses.forEach(expense => {
        total += parseInt(expense.amount);
        const li = document.createElement('li');
        li.className = 'expense-item';
        li.innerHTML = `
            <div class="expense-info">
                <h4>${expense.desc}</h4>
                <span>${categoryMap[expense.category]}</span>
            </div>
            <div class="expense-amount">¥${parseInt(expense.amount).toLocaleString()}</div>
        `;
        expenseList.prepend(li);
    });

    totalSpentEl.textContent = `¥${total.toLocaleString()}`;
}

addExpenseBtn.addEventListener('click', () => expenseModal.classList.remove('hidden'));
closeExpenseBtn.addEventListener('click', () => expenseModal.classList.add('hidden'));

saveExpenseBtn.addEventListener('click', () => {
    const desc = expenseDesc.value;
    const amount = expenseAmount.value;
    const category = expenseCategory.value;

    if (!desc || !amount) return;

    const newExpense = { desc, amount, category };
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    renderExpenses();
    expenseDesc.value = '';
    expenseAmount.value = '';
    expenseModal.classList.add('hidden');
});

renderExpenses();
