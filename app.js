// ========================================
// CO-OP SEVA
// COMPLETE APP.JS
// Existing features + GLOBAL LANGUAGE SUPPORT
// ========================================


// ==================== LOGIN ====================

function customerLogin() {
    showCustomerHome();
}

function workerLogin() {
    showWorkerDashboard();
}

function adminLogin() {
    showAdminDashboard();
}


// ==================== CUSTOMER HOME ====================

function showCustomerHome() {

    document.body.innerHTML = `
        <div class="welcome-container">

            <div class="logo">🤝</div>

            <h1>CO-OP SEVA</h1>

            <p class="tagline">
                Trusted Workers • Fair Bookings • Stronger Cooperatives
            </p>

            <h2>Customer Dashboard</h2>

            <button onclick="selectService()">
                🔍 Find a Service
            </button>

            <button onclick="emergencyService()">
                🚨 Emergency Service
            </button>

            <button onclick="myBookings()">
                📋 My Bookings
            </button>

            <button onclick="showTrustInfo()">
                🛡️ Why Trust Co-Op Seva?
            </button>

            <button onclick="goBack()">
                ⬅️ Logout
            </button>

        </div>
    `;
}


// ==================== SERVICE SELECTION ====================

function selectService() {

    document.body.innerHTML = `
        <div class="welcome-container">

            <div class="logo">🛠️</div>

            <h1>Select a Service</h1>

            <p class="tagline">
                Choose the service you need
            </p>

            <button onclick="openServiceMap('Electrician')">
                ⚡ Electrician
            </button>

            <button onclick="openServiceMap('Plumber')">
                🚰 Plumber
            </button>

            <button onclick="openServiceMap('Carpenter')">
                🪚 Carpenter
            </button>

            <button onclick="openServiceMap('Painter')">
                🎨 Painter
            </button>

            <button onclick="openServiceMap('Cleaning')">
                🧹 Cleaning
            </button>

            <button onclick="openServiceMap('Mechanic')">
                🔧 Mechanic
            </button>

            <button onclick="showCustomerHome()">
                ⬅️ Back
            </button>

        </div>
    `;
}


// ==================== SERVICE MAP ====================

function openServiceMap(service) {

    document.body.innerHTML = `
        <div class="welcome-container">

            <div class="logo">🗺️</div>

            <h1 class="map-title">
                Co-Op Live Service Map
            </h1>

            <p class="map-subtitle">
                ${service} workers near your location
            </p>

            <div class="map-legend">

                <p>📍 <strong>Your Location</strong></p>

                <p>🟢 <strong>Available Worker</strong></p>

                <p>🟡 <strong>Busy Worker</strong></p>

                <p>🔴 <strong>Offline Worker</strong></p>

            </div>

            <div id="serviceMap"></div>

            <div class="worker-card">

                <h2>⚖️ FairMatch</h2>

                <p>
                    🎯 Skill Match — 35%
                </p>

                <p>
                    🟢 Availability — 25%
                </p>

                <p>
                    📍 Distance — 20%
                </p>

                <p>
                    ⚖️ Workload Fairness — 20%
                </p>

            </div>

            <button onclick="selectService()">
                ⬅️ Change Service
            </button>

            <button onclick="showCustomerHome()">
                🏠 Customer Home
            </button>

        </div>
    `;

    setTimeout(function () {
        createServiceMap(service);
    }, 100);
}


// ==================== CREATE SERVICE MAP ====================

function createServiceMap(service) {

    const map = L.map("serviceMap").setView(
        [12.9716, 77.5946],
        13
    );

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);


    // CUSTOMER

    const customer = L.marker(
        [12.9716, 77.5946]
    ).addTo(map);

    customer.bindPopup(`
        <strong>📍 Your Location</strong>
        <br><br>
        Service:
        <strong>${service}</strong>
    `);


    // RAMESH

    const worker1 = L.marker(
        [12.9780, 77.5910]
    ).addTo(map);

    worker1.bindPopup(`
        <strong>🟢 Ramesh Kumar</strong>

        <br><br>

        🛠️ ${service}

        <br>

        ⭐ Rating: 4.8/5

        <br>

        📏 Distance: 1.2 km

        <br>

        🟢 Available

        <br>

        🛡️ Verified

        <br><br>

        🏆 FairMatch:
        <strong>96%</strong>

        <br><br>

        <button onclick="showFairMatch(
            'Ramesh Kumar',
            '${service}',
            95,
            100,
            90,
            95
        )">
            ⚖️ View FairMatch
        </button>
    `);


    // PRIYA

    const worker2 = L.marker(
        [12.9650, 77.6000]
    ).addTo(map);

    worker2.bindPopup(`
        <strong>🟢 Priya Sharma</strong>

        <br><br>

        🛠️ ${service}

        <br>

        ⭐ Rating: 4.9/5

        <br>

        📏 Distance: 1.8 km

        <br>

        🟢 Available

        <br>

        🛡️ Verified

        <br><br>

        🏆 FairMatch:
        <strong>89%</strong>

        <br><br>

        <button onclick="showFairMatch(
            'Priya Sharma',
            '${service}',
            90,
            100,
            80,
            85
        )">
            ⚖️ View FairMatch
        </button>
    `);


    // SURESH

    const worker3 = L.marker(
        [12.9850, 77.6050]
    ).addTo(map);

    worker3.bindPopup(`
        <strong>🟡 Suresh Patel</strong>

        <br><br>

        🛠️ ${service}

        <br>

        ⭐ Rating: 4.7/5

        <br>

        📏 Distance: 2.1 km

        <br>

        🟡 Busy

        <br>

        🛡️ Verified

        <br><br>

        🏆 FairMatch:
        <strong>73%</strong>

        <br><br>

        <button onclick="showFairMatch(
            'Suresh Patel',
            '${service}',
            88,
            60,
            75,
            55
        )">
            ⚖️ View FairMatch
        </button>
    `);


    // SERVICE ZONE

    L.circle(
        [12.9716, 77.5946],
        {
            radius: 2500,
            fillOpacity: 0.08
        }
    )
    .addTo(map)
    .bindPopup(`
        <strong>🏢 Cooperative Service Zone</strong>

        <br><br>

        Verified cooperative workers
        serving this area.
    `);
}


// ==================== FAIRMATCH ====================

function calculateFairMatch(
    skill,
    availability,
    distance,
    workload
) {

    const score =
        (skill * 0.35) +
        (availability * 0.25) +
        (distance * 0.20) +
        (workload * 0.20);

    return Math.round(score);
}


function showFairMatch(
    name,
    service,
    skill,
    availability,
    distance,
    workload
) {

    const finalScore =
        calculateFairMatch(
            skill,
            availability,
            distance,
            workload
        );


    let resultText =
        "⚠️ Lower Priority Match";

    if (finalScore >= 90) {
        resultText = "🌟 Excellent Match";
    }
    else if (finalScore >= 80) {
        resultText = "👍 Good Match";
    }


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">⚖️</div>

            <h1>FairMatch</h1>

            <p class="tagline">
                Smart and fair worker recommendation
            </p>


            <div class="worker-card">

                <h2>🏆 ${name}</h2>

                <p>
                    Service:
                    <strong>${service}</strong>
                </p>

                <p>
                    Rating:
                    ⭐ 4.8 / 5
                </p>

                <hr>

                <h2>📊 Match Analysis</h2>

                <p>
                    🎯 Skill Match:
                    <strong>${skill}%</strong>
                </p>

                <p>
                    🟢 Availability:
                    <strong>${availability}%</strong>
                </p>

                <p>
                    📍 Distance:
                    <strong>${distance}%</strong>
                </p>

                <p>
                    ⚖️ Workload Fairness:
                    <strong>${workload}%</strong>
                </p>

            </div>


            <div class="worker-card">

                <h2>
                    🏆 FairMatch Score
                </h2>

                <p style="
                    font-size:40px;
                    text-align:center;
                ">

                    <strong>
                        ${finalScore}%
                    </strong>

                </p>

                <p style="text-align:center;">
                    ${resultText}
                </p>

            </div>


            <button onclick="
                bookWorker('${name}', '${service}')
            ">
                📅 BOOK THIS WORKER
            </button>


            <button onclick="
                openServiceMap('${service}')
            ">
                🗺️ Back to Map
            </button>

        </div>
    `;
}


// ==================== BOOKING ====================

function bookWorker(name, service) {

    localStorage.setItem(
        "bookingStatus",
        "waiting"
    );

    localStorage.setItem(
        "workerName",
        name
    );

    localStorage.setItem(
        "serviceName",
        service
    );

    showBookingStatus();
}


function showBookingStatus() {

    let status =
        localStorage.getItem("bookingStatus")
        || "waiting";

    let worker =
        localStorage.getItem("workerName")
        || "Ramesh Kumar";

    let service =
        localStorage.getItem("serviceName")
        || "Electrician";


    let acceptedClass = "";
    let progressClass = "";
    let completedClass = "";


    if (
        status === "accepted" ||
        status === "inprogress" ||
        status === "completed"
    ) {
        acceptedClass = "active";
    }


    if (
        status === "inprogress" ||
        status === "completed"
    ) {
        progressClass = "active";
    }


    if (status === "completed") {
        completedClass = "active";
    }


    let currentStatus =
        "🟡 Waiting for Worker";


    if (status === "accepted") {
        currentStatus =
            "🟢 Worker Accepted";
    }

    if (status === "inprogress") {
        currentStatus =
            "🔵 Service In Progress";
    }

    if (status === "completed") {
        currentStatus =
            "✅ Service Completed";
    }


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">📋</div>

            <h1>Booking Status</h1>


            <div class="worker-card">

                <h2>📍 Service Progress</h2>

                <div class="progress-container">

                    <div class="progress-step active">

                        <div class="progress-icon">
                            📋
                        </div>

                        <p>Requested</p>

                    </div>


                    <div class="progress-line"></div>


                    <div class="progress-step ${acceptedClass}">

                        <div class="progress-icon">
                            👷
                        </div>

                        <p>Accepted</p>

                    </div>


                    <div class="progress-line"></div>


                    <div class="progress-step ${progressClass}">

                        <div class="progress-icon">
                            🛠️
                        </div>

                        <p>In Progress</p>

                    </div>


                    <div class="progress-line"></div>


                    <div class="progress-step ${completedClass}">

                        <div class="progress-icon">
                            ✅
                        </div>

                        <p>Completed</p>

                    </div>

                </div>

            </div>


            <div class="worker-card">

                <p>
                    <strong>Booking ID:</strong>
                    #CS1001
                </p>

                <p>
                    <strong>Worker:</strong>
                    ${worker}
                </p>

                <p>
                    <strong>Service:</strong>
                    ${service}
                </p>

                <p>
                    <strong>Amount:</strong>
                    ₹500
                </p>

                <p>
                    <strong>Status:</strong>
                    ${currentStatus}
                </p>

            </div>


            ${
                status === "completed"
                ? `
                    <button onclick="paymentPage()">
                        💳 Continue to Payment
                    </button>
                `
                : ""
            }


            <button onclick="showCustomerHome()">
                🏠 Customer Home
            </button>

        </div>
    `;
}


// ==================== PAYMENT ====================

function paymentPage() {

    let worker =
        localStorage.getItem("workerName");

    let service =
        localStorage.getItem("serviceName");


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">💳</div>

            <h1>Payment</h1>

            <p class="tagline">
                Payment simulation
            </p>


            <div class="worker-card">

                <p>
                    Worker:
                    <strong>${worker}</strong>
                </p>

                <p>
                    Service:
                    <strong>${service}</strong>
                </p>

                <p>
                    Service Charge:
                    <strong>₹500</strong>
                </p>

            </div>


            <button onclick="paymentSuccess()">
                📱 Pay ₹500
            </button>


            <button onclick="showBookingStatus()">
                ⬅️ Back
            </button>

        </div>
    `;
}


function paymentSuccess() {

    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">🎉</div>

            <h1>Payment Successful!</h1>

            <p class="tagline">
                Your payment has been recorded.
            </p>


            <div class="worker-card">

                <p>
                    Booking ID:
                    <strong>#CS1001</strong>
                </p>

                <p>
                    Amount Paid:
                    <strong>₹500</strong>
                </p>

                <p>
                    Status:
                    🟢 Paid
                </p>

            </div>


            <button onclick="invoice()">
                🧾 View Invoice
            </button>


            <button onclick="rateWorker()">
                ⭐ Rate Worker
            </button>


            <button onclick="showCustomerHome()">
                🏠 Home
            </button>

        </div>
    `;
}


// ==================== INVOICE ====================

function invoice() {

    let worker =
        localStorage.getItem("workerName");

    let service =
        localStorage.getItem("serviceName");


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">🧾</div>

            <h1>Digital Invoice</h1>


            <div class="worker-card">

                <h2>CO-OP SEVA</h2>

                <hr>

                <p>
                    Booking ID: #CS1001
                </p>

                <p>
                    Worker: ${worker}
                </p>

                <p>
                    Service: ${service}
                </p>

                <p>
                    Amount: ₹500
                </p>

                <p>
                    Status: 🟢 Paid
                </p>

            </div>


            <button onclick="showCustomerHome()">
                🏠 Home
            </button>

        </div>
    `;
}


// ==================== RATING ====================

function rateWorker() {

    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">⭐</div>

            <h1>Rate Worker</h1>

            <p>
                How was your experience?
            </p>


            <button onclick="ratingSubmitted()">
                ⭐⭐⭐⭐⭐ Excellent
            </button>

            <button onclick="ratingSubmitted()">
                ⭐⭐⭐⭐ Good
            </button>

            <button onclick="ratingSubmitted()">
                ⭐⭐⭐ Average
            </button>

        </div>
    `;
}


function ratingSubmitted() {

    alert(
        translateMessage("Thank you for your feedback!")
    );

    showCustomerHome();
}


// ==================== MY BOOKINGS ====================

function myBookings() {

    let status =
        localStorage.getItem("bookingStatus");


    let readableStatus =
        "No active booking";


    if (status === "waiting") {
        readableStatus =
            "🟡 Waiting for Worker";
    }

    if (status === "accepted") {
        readableStatus =
            "🟢 Worker Accepted";
    }

    if (status === "inprogress") {
        readableStatus =
            "🔵 Service In Progress";
    }

    if (status === "completed") {
        readableStatus =
            "✅ Service Completed";
    }


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">📋</div>

            <h1>My Bookings</h1>


            <div class="worker-card">

                <h2>🛠️ Current Service</h2>

                <p>
                    Worker:
                    ${
                        localStorage.getItem("workerName")
                        || "Ramesh Kumar"
                    }
                </p>

                <p>
                    Service:
                    ${
                        localStorage.getItem("serviceName")
                        || "Electrician"
                    }
                </p>

                <p>
                    Amount: ₹500
                </p>

                <p>
                    Status:
                    ${readableStatus}
                </p>

            </div>


            ${
                status
                ? `
                    <button onclick="showBookingStatus()">
                        🔎 Track Booking
                    </button>
                `
                : ""
            }


            <button onclick="showCustomerHome()">
                ⬅️ Back
            </button>

        </div>
    `;
}


// ==================== EMERGENCY ====================

function emergencyService() {

    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">🚨</div>

            <h1>Emergency Service</h1>

            <p class="tagline">
                Find an available worker quickly.
            </p>


            <button onclick="openServiceMap('Electrician')">
                ⚡ Electrical Emergency
            </button>

            <button onclick="openServiceMap('Plumber')">
                🚰 Plumbing Emergency
            </button>

            <button onclick="openServiceMap('Mechanic')">
                🔧 Vehicle Emergency
            </button>


            <button onclick="showCustomerHome()">
                ⬅️ Back
            </button>

        </div>
    `;
}


// ==================== TRUST ====================

function showTrustInfo() {

    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">🛡️</div>

            <h1>Why Trust Co-Op Seva?</h1>


            <div class="worker-card">

                <h2>✓ Verified Workers</h2>

                <p>
                    Workers are registered
                    through the cooperative.
                </p>

            </div>


            <div class="worker-card">

                <h2>⚖️ FairMatch</h2>

                <p>
                    Jobs are distributed fairly
                    among cooperative members.
                </p>

            </div>


            <div class="worker-card">

                <h2>🗺️ Live Service Map</h2>

                <p>
                    Customers can discover
                    nearby cooperative workers.
                </p>

            </div>


            <div class="worker-card">

                <h2>🏢 Cooperative Owned</h2>

                <p>
                    Supports local workers
                    and communities.
                </p>

            </div>


            <button onclick="showCustomerHome()">
                ⬅️ Back
            </button>

        </div>
    `;
}


// ==================== WORKER DASHBOARD ====================

function showWorkerDashboard() {

    let status =
        localStorage.getItem("bookingStatus");


    let service =
        localStorage.getItem("serviceName")
        || "Electrical Repair";


    let availability =
        localStorage.getItem("workerAvailability")
        || "available";


    let availabilityText =
        "🟢 Available";


    if (availability === "busy") {
        availabilityText = "🟡 Busy";
    }

    if (availability === "offline") {
        availabilityText = "🔴 Offline";
    }


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">👷</div>

            <h1>Worker Dashboard</h1>

            <p class="tagline">
                Welcome, Ramesh Kumar!
            </p>


            <div class="worker-card">

                <h2>📡 My Availability</h2>

                <p>
                    Current Status:
                    <strong>
                        ${availabilityText}
                    </strong>
                </p>


                <button onclick="
                    setAvailability('available')
                ">
                    🟢 Set Available
                </button>


                <button onclick="
                    setAvailability('busy')
                ">
                    🟡 Set Busy
                </button>


                <button onclick="
                    setAvailability('offline')
                ">
                    🔴 Set Offline
                </button>

            </div>


            <div class="worker-card">

                <h2>🆕 Customer Booking</h2>

                <p>
                    Customer: Ananya
                </p>

                <p>
                    Service: ${service}
                </p>

                <p>
                    Location: 📍 1.2 km
                </p>

                <p>
                    Amount: ₹500
                </p>


                ${
                    status === "waiting"
                    ? `
                        <button onclick="acceptJob()">
                            ✅ Accept Job
                        </button>

                        <button onclick="rejectJob()">
                            ❌ Reject
                        </button>
                    `
                    : ""
                }


                ${
                    status === "accepted"
                    ? `
                        <button onclick="startJob()">
                            🛠️ Start Service
                        </button>
                    `
                    : ""
                }


                ${
                    status === "inprogress"
                    ? `
                        <button onclick="completeJob()">
                            ✅ Mark Job Completed
                        </button>
                    `
                    : ""
                }

            </div>


            <div class="worker-card">

                <h2>📊 Today's Summary</h2>

                <p>
                    Jobs Completed: 3
                </p>

                <p>
                    Total Earnings: ₹1,450
                </p>

                <p>
                    Rating: ⭐ 4.8
                </p>

            </div>


            <div class="worker-card">

                <h2>🛡️ Worker Welfare</h2>

                <p>
                    Cooperative Member: ✅
                </p>

                <p>
                    Skill Verification: ✅
                </p>

                <p>
                    Welfare Status: 🟢 Active
                </p>

            </div>


            <button onclick="goBack()">
                ⬅️ Logout
            </button>

        </div>
    `;
}


// ==================== AVAILABILITY ====================

function setAvailability(status) {

    localStorage.setItem(
        "workerAvailability",
        status
    );


    if (status === "available") {
        alert(
            translateMessage("🟢 You are now AVAILABLE.")
        );
    }

    if (status === "busy") {
        alert(
            translateMessage("🟡 You are now BUSY.")
        );
    }

    if (status === "offline") {
        alert(
            translateMessage("🔴 You are now OFFLINE.")
        );
    }


    showWorkerDashboard();
}


// ==================== WORKER JOB ACTIONS ====================

function acceptJob() {

    localStorage.setItem(
        "bookingStatus",
        "accepted"
    );

    localStorage.setItem(
        "workerAvailability",
        "busy"
    );

    alert(
        translateMessage("Booking accepted!")
    );

    showWorkerDashboard();
}


function startJob() {

    localStorage.setItem(
        "bookingStatus",
        "inprogress"
    );

    localStorage.setItem(
        "workerAvailability",
        "busy"
    );

    alert(
        translateMessage("Service started!")
    );

    showWorkerDashboard();
}


function rejectJob() {

    localStorage.setItem(
        "bookingStatus",
        "rejected"
    );

    localStorage.setItem(
        "workerAvailability",
        "available"
    );

    alert(
        translateMessage("Booking rejected.")
    );

    showWorkerDashboard();
}


function completeJob() {

    localStorage.setItem(
        "bookingStatus",
        "completed"
    );

    localStorage.setItem(
        "workerAvailability",
        "available"
    );

    alert(
        translateMessage("Service completed!")
    );

    showWorkerDashboard();
}


// ==================== ADMIN DASHBOARD ====================

function showAdminDashboard() {

    let status =
        localStorage.getItem("bookingStatus");


    let bookingStatus =
        "No active booking";


    if (status === "waiting") {
        bookingStatus = "🟡 Waiting";
    }

    if (status === "accepted") {
        bookingStatus = "🟢 Accepted";
    }

    if (status === "inprogress") {
        bookingStatus = "🔵 In Progress";
    }

    if (status === "completed") {
        bookingStatus = "✅ Completed";
    }


    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">🏢</div>

            <h1>Cooperative Admin</h1>

            <p class="tagline">
                Cooperative network overview
            </p>


            <div class="worker-card">

                <h2>👷 Workers</h2>

                <p>
                    Registered:
                    <strong>24</strong>
                </p>

                <p>
                    Verified:
                    <strong>24</strong>
                </p>

                <p>
                    Available:
                    <strong>18</strong>
                </p>

            </div>


            <div class="worker-card">

                <h2>📡 Live Availability</h2>

                <p>
                    🟢 Available:
                    <strong>18</strong>
                </p>

                <p>
                    🟡 Busy:
                    <strong>4</strong>
                </p>

                <p>
                    🔴 Offline:
                    <strong>2</strong>
                </p>

            </div>


            <div class="worker-card">

                <h2>📋 Live Booking</h2>

                <p>
                    Booking ID: #CS1001
                </p>

                <p>
                    Worker: Ramesh Kumar
                </p>

                <p>
                    Status:
                    <strong>
                        ${bookingStatus}
                    </strong>
                </p>

            </div>


            <div class="worker-card">

                <h2>⚖️ FairMatch Analytics</h2>

                <p>
                    Average Match Score:
                    <strong>85%</strong>
                </p>

                <p>
                    Fair Distribution:
                    <strong>92%</strong>
                </p>

                <p>
                    Workers Receiving Jobs:
                    <strong>21 / 24</strong>
                </p>

            </div>


            <button onclick="showDemandHeatmap()">
                🔥 Open Demand Heatmap
            </button>


            <button onclick="goBack()">
                ⬅️ Logout
            </button>

        </div>
    `;
}


// ==================== DEMAND HEATMAP ====================

function showDemandHeatmap() {

    document.body.innerHTML = `

        <div class="welcome-container">

            <div class="logo">🔥</div>

            <h1>
                Service Demand Heatmap
            </h1>

            <p class="tagline">
                Understand where customers need workers
            </p>


            <div class="map-legend">

                <p>
                    🔴 <strong>HIGH DEMAND</strong>
                    — More workers needed
                </p>

                <p>
                    🟡 <strong>MEDIUM DEMAND</strong>
                    — Normal activity
                </p>

                <p>
                    🟢 <strong>LOW DEMAND</strong>
                    — Enough workers
                </p>

            </div>


            <div id="demandMap"></div>


            <div class="worker-card">

                <h2>🔥 Demand Areas</h2>

                <p>
                    🔴 <strong>Central Area</strong>
                    — 18 requests
                </p>

                <p>
                    🟡 <strong>North Area</strong>
                    — 11 requests
                </p>

                <p>
                    🟢 <strong>South Area</strong>
                    — 5 requests
                </p>

            </div>


            <div class="worker-card">

                <h2>💡 Cooperative Recommendation</h2>

                <p>
                    ⚡ Electrical services have
                    the highest demand.
                </p>

                <p>
                    👷 Deploy more electricians
                    to the Central Area.
                </p>

                <p>
                    ⚖️ FairMatch can prioritize
                    available cooperative workers.
                </p>

            </div>


            <button onclick="showAdminDashboard()">
                ⬅️ Admin Dashboard
            </button>

        </div>
    `;


    setTimeout(function () {
        createDemandMap();
    }, 100);
}


// ==================== DEMAND MAP ====================

function createDemandMap() {

    const map = L.map("demandMap").setView(
        [12.9716, 77.5946],
        13
    );


    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);


    // HIGH DEMAND

    L.circle(
        [12.9716, 77.5946],
        {
            radius: 1200,
            fillOpacity: 0.25
        }
    )
    .addTo(map)
    .bindPopup(`
        <strong>🔴 HIGH DEMAND</strong>

        <br><br>

        18 service requests

        <br>

        More workers required.
    `);


    // MEDIUM DEMAND

    L.circle(
        [12.9850, 77.6050],
        {
            radius: 900,
            fillOpacity: 0.18
        }
    )
    .addTo(map)
    .bindPopup(`
        <strong>🟡 MEDIUM DEMAND</strong>

        <br><br>

        11 service requests
    `);


    // LOW DEMAND

    L.circle(
        [12.9550, 77.5850],
        {
            radius: 700,
            fillOpacity: 0.12
        }
    )
    .addTo(map)
    .bindPopup(`
        <strong>🟢 LOW DEMAND</strong>

        <br><br>

        5 service requests

        <br>

        Current worker supply is sufficient.
    `);


    // CENTRAL DEMAND MARKER

    L.marker(
        [12.9716, 77.5946]
    )
    .addTo(map)
    .bindPopup(`
        <strong>🔥 Central Demand Zone</strong>

        <br><br>

        Requests: 18

        <br>

        Available workers: 6

        <br>

        Recommended action:

        <strong>Add electricians</strong>
    `);


    // NORTH DEMAND MARKER

    L.marker(
        [12.9850, 77.6050]
    )
    .addTo(map)
    .bindPopup(`
        <strong>🟡 North Demand Zone</strong>

        <br><br>

        Requests: 11

        <br>

        Available workers: 7
    `);


    // SOUTH DEMAND MARKER

    L.marker(
        [12.9550, 77.5850]
    )
    .addTo(map)
    .bindPopup(`
        <strong>🟢 South Demand Zone</strong>

        <br><br>

        Requests: 5

        <br>

        Available workers: 8
    `);
}


// ==================== LOGOUT ====================

function goBack() {

    localStorage.clear();

    location.reload();
}



// ======================================================
// GLOBAL MULTILINGUAL SYSTEM
// ======================================================

(function () {

    const translations = {

        hi: {

            "Customer Dashboard":
                "ग्राहक डैशबोर्ड",

            "Find a Service":
                "सेवा खोजें",

            "Emergency Service":
                "आपातकालीन सेवा",

            "My Bookings":
                "मेरी बुकिंग",

            "Why Trust Co-Op Seva?":
                "को-ऑप सेवा पर भरोसा क्यों करें?",

            "Logout":
                "लॉगआउट",

            "Select a Service":
                "सेवा चुनें",

            "Choose the service you need":
                "अपनी आवश्यक सेवा चुनें",

            "Electrician":
                "इलेक्ट्रीशियन",

            "Plumber":
                "प्लंबर",

            "Carpenter":
                "बढ़ई",

            "Painter":
                "पेंटर",

            "Cleaning":
                "सफाई",

            "Mechanic":
                "मैकेनिक",

            "Back":
                "वापस",

            "Co-Op Live Service Map":
                "को-ऑप लाइव सेवा मानचित्र",

            "workers near your location":
                "आपके स्थान के पास कर्मचारी",

            "Your Location":
                "आपका स्थान",

            "Available Worker":
                "उपलब्ध कर्मचारी",

            "Busy Worker":
                "व्यस्त कर्मचारी",

            "Offline Worker":
                "ऑफलाइन कर्मचारी",

            "FairMatch":
                "फेयरमैच",

            "Skill Match":
                "कौशल मिलान",

            "Availability":
                "उपलब्धता",

            "Distance":
                "दूरी",

            "Workload Fairness":
                "कार्यभार निष्पक्षता",

            "Change Service":
                "सेवा बदलें",

            "Customer Home":
                "ग्राहक होम",

            "Rating":
                "रेटिंग",

            "Available":
                "उपलब्ध",

            "Busy":
                "व्यस्त",

            "Offline":
                "ऑफलाइन",

            "Verified":
                "सत्यापित",

            "View FairMatch":
                "फेयरमैच देखें",

            "Smart and fair worker recommendation":
                "स्मार्ट और निष्पक्ष कर्मचारी सुझाव",

            "Service:":
                "सेवा:",

            "Match Analysis":
                "मिलान विश्लेषण",

            "FairMatch Score":
                "फेयरमैच स्कोर",

            "Excellent Match":
                "उत्कृष्ट मिलान",

            "Good Match":
                "अच्छा मिलान",

            "Lower Priority Match":
                "कम प्राथमिकता वाला मिलान",

            "BOOK THIS WORKER":
                "इस कर्मचारी को बुक करें",

            "Back to Map":
                "मानचित्र पर वापस जाएँ",

            "Booking Status":
                "बुकिंग स्थिति",

            "Service Progress":
                "सेवा प्रगति",

            "Requested":
                "अनुरोधित",

            "Accepted":
                "स्वीकृत",

            "In Progress":
                "प्रगति में",

            "Completed":
                "पूर्ण",

            "Booking ID:":
                "बुकिंग आईडी:",

            "Worker:":
                "कर्मचारी:",

            "Amount:":
                "राशि:",

            "Status:":
                "स्थिति:",

            "Waiting for Worker":
                "कर्मचारी की प्रतीक्षा",

            "Worker Accepted":
                "कर्मचारी ने स्वीकार किया",

            "Service In Progress":
                "सेवा प्रगति में",

            "Service Completed":
                "सेवा पूर्ण",

            "Continue to Payment":
                "भुगतान जारी रखें",

            "Payment":
                "भुगतान",

            "Payment simulation":
                "भुगतान सिमुलेशन",

            "Service Charge:":
                "सेवा शुल्क:",

            "Pay ₹500":
                "₹500 का भुगतान करें",

            "Payment Successful!":
                "भुगतान सफल!",

            "Your payment has been recorded.":
                "आपका भुगतान दर्ज कर लिया गया है।",

            "Amount Paid:":
                "भुगतान की गई राशि:",

            "Paid":
                "भुगतान किया गया",

            "View Invoice":
                "इनवॉइस देखें",

            "Rate Worker":
                "कर्मचारी को रेट करें",

            "Digital Invoice":
                "डिजिटल इनवॉइस",

            "How was your experience?":
                "आपका अनुभव कैसा रहा?",

            "Excellent":
                "उत्कृष्ट",

            "Good":
                "अच्छा",

            "Average":
                "औसत",

            "Thank you for your feedback!":
                "आपकी प्रतिक्रिया के लिए धन्यवाद!",

            "No active booking":
                "कोई सक्रिय बुकिंग नहीं",

            "Current Service":
                "वर्तमान सेवा",

            "Track Booking":
                "बुकिंग ट्रैक करें",

            "Find an available worker quickly.":
                "जल्दी से उपलब्ध कर्मचारी खोजें।",

            "Electrical Emergency":
                "विद्युत आपातकाल",

            "Plumbing Emergency":
                "प्लंबिंग आपातकाल",

            "Vehicle Emergency":
                "वाहन आपातकाल",

            "Verified Workers":
                "सत्यापित कर्मचारी",

            "Workers are registered":
                "कर्मचारी पंजीकृत हैं",

            "through the cooperative.":
                "सहकारी समिति के माध्यम से।",

            "FairMatch":
                "फेयरमैच",

            "Jobs are distributed fairly":
                "काम निष्पक्ष रूप से वितरित किए जाते हैं",

            "among cooperative members.":
                "सहकारी सदस्यों के बीच।",

            "Live Service Map":
                "लाइव सेवा मानचित्र",

            "Customers can discover":
                "ग्राहक खोज सकते हैं",

            "nearby cooperative workers.":
                "पास के सहकारी कर्मचारी।",

            "Cooperative Owned":
                "सहकारी स्वामित्व",

            "Supports local workers":
                "स्थानीय कर्मचारियों और समुदायों",

            "and communities.":
                "का समर्थन करता है।",

            "Worker Dashboard":
                "कर्मचारी डैशबोर्ड",

            "Welcome, Ramesh Kumar!":
                "स्वागत है, रमेश कुमार!",

            "My Availability":
                "मेरी उपलब्धता",

            "Current Status:":
                "वर्तमान स्थिति:",

            "Set Available":
                "उपलब्ध सेट करें",

            "Set Busy":
                "व्यस्त सेट करें",

            "Set Offline":
                "ऑफलाइन सेट करें",

            "Customer Booking":
                "ग्राहक बुकिंग",

            "Customer:":
                "ग्राहक:",

            "Location:":
                "स्थान:",

            "Accept Job":
                "काम स्वीकार करें",

            "Reject":
                "अस्वीकार करें",

            "Start Service":
                "सेवा शुरू करें",

            "Mark Job Completed":
                "काम पूर्ण करें",

            "Today's Summary":
                "आज का सारांश",

            "Jobs Completed:":
                "पूर्ण किए गए काम:",

            "Total Earnings:":
                "कुल कमाई:",

            "Worker Welfare":
                "कर्मचारी कल्याण",

            "Cooperative Member:":
                "सहकारी सदस्य:",

            "Skill Verification:":
                "कौशल सत्यापन:",

            "Welfare Status:":
                "कल्याण स्थिति:",

            "Active":
                "सक्रिय",

            "Cooperative Admin":
                "सहकारी प्रशासक",

            "Cooperative network overview":
                "सहकारी नेटवर्क का अवलोकन",

            "Workers":
                "कर्मचारी",

            "Registered:":
                "पंजीकृत:",

            "Verified:":
                "सत्यापित:",

            "Available:":
                "उपलब्ध:",

            "Live Availability":
                "लाइव उपलब्धता",

            "Live Booking":
                "लाइव बुकिंग",

            "Average Match Score:":
                "औसत मिलान स्कोर:",

            "Fair Distribution:":
                "निष्पक्ष वितरण:",

            "Workers Receiving Jobs:":
                "काम पाने वाले कर्मचारी:",

            "Open Demand Heatmap":
                "डिमांड हीटमैप खोलें",

            "Service Demand Heatmap":
                "सेवा मांग हीटमैप",

            "Understand where customers need workers":
                "समझें कि ग्राहकों को कहाँ कर्मचारियों की आवश्यकता है",

            "HIGH DEMAND":
                "उच्च मांग",

            "More workers needed":
                "अधिक कर्मचारियों की आवश्यकता",

            "MEDIUM DEMAND":
                "मध्यम मांग",

            "Normal activity":
                "सामान्य गतिविधि",

            "LOW DEMAND":
                "कम मांग",

            "Enough workers":
                "पर्याप्त कर्मचारी",

            "Demand Areas":
                "मांग वाले क्षेत्र",

            "Central Area":
                "केंद्रीय क्षेत्र",

            "North Area":
                "उत्तरी क्षेत्र",

            "South Area":
                "दक्षिणी क्षेत्र",

            "Cooperative Recommendation":
                "सहकारी सुझाव",

            "Electrical services have":
                "विद्युत सेवाओं की",

            "the highest demand.":
                "मांग सबसे अधिक है।",

            "Deploy more electricians":
                "अधिक इलेक्ट्रीशियन तैनात करें",

            "to the Central Area.":
                "केंद्रीय क्षेत्र में।",

            "FairMatch can prioritize":
                "फेयरमैच प्राथमिकता दे सकता है",

            "available cooperative workers.":
                "उपलब्ध सहकारी कर्मचारियों को।",

            "Central Demand Zone":
                "केंद्रीय मांग क्षेत्र",

            "North Demand Zone":
                "उत्तरी मांग क्षेत्र",

            "South Demand Zone":
                "दक्षिणी मांग क्षेत्र",

            "Requests:":
                "अनुरोध:",

            "Available workers:":
                "उपलब्ध कर्मचारी:",

            "Recommended action:":
                "अनुशंसित कार्रवाई:",

            "Add electricians":
                "इलेक्ट्रीशियन जोड़ें",

            "More workers required.":
                "अधिक कर्मचारियों की आवश्यकता है।",

            "Current worker supply is sufficient.":
                "वर्तमान कर्मचारी आपूर्ति पर्याप्त है।",

            "Trusted Workers • Fair Bookings • Stronger Cooperatives":
                "विश्वसनीय कर्मचारी • निष्पक्ष बुकिंग • मजबूत सहकारी समितियाँ",

            "CO-OP SEVA":
                "को-ऑप सेवा",

            "Booking accepted!":
                "बुकिंग स्वीकार की गई!",

            "Service started!":
                "सेवा शुरू हो गई!",

            "Booking rejected.":
                "बुकिंग अस्वीकार की गई।",

            "Service completed!":
                "सेवा पूरी हो गई!",

            "Thank you for your feedback!":
                "आपकी प्रतिक्रिया के लिए धन्यवाद!"
        },


        kn: {

            "Customer Dashboard":
                "ಗ್ರಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

            "Find a Service":
                "ಸೇವೆಯನ್ನು ಹುಡುಕಿ",

            "Emergency Service":
                "ತುರ್ತು ಸೇವೆ",

            "My Bookings":
                "ನನ್ನ ಬುಕ್ಕಿಂಗ್‌ಗಳು",

            "Why Trust Co-Op Seva?":
                "ಕೋ-ಆಪ್ ಸೇವಾವನ್ನು ಏಕೆ ನಂಬಬೇಕು?",

            "Logout":
                "ಲಾಗ್‌ಔಟ್",

            "Select a Service":
                "ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",

            "Choose the service you need":
                "ನಿಮಗೆ ಬೇಕಾದ ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",

            "Electrician":
                "ಎಲೆಕ್ಟ್ರಿಷಿಯನ್",

            "Plumber":
                "ಪ್ಲಂಬರ್",

            "Carpenter":
                "ಬಡಗಿ",

            "Painter":
                "ಪೇಂಟರ್",

            "Cleaning":
                "ಸ್ವಚ್ಛತೆ",

            "Mechanic":
                "ಮೆಕ್ಯಾನಿಕ್",

            "Back":
                "ಹಿಂದೆ",

            "Co-Op Live Service Map":
                "ಕೋ-ಆಪ್ ಲೈವ್ ಸೇವಾ ನಕ್ಷೆ",

            "workers near your location":
                "ನಿಮ್ಮ ಸ್ಥಳದ ಸಮೀಪದ ಕಾರ್ಮಿಕರು",

            "Your Location":
                "ನಿಮ್ಮ ಸ್ಥಳ",

            "Available Worker":
                "ಲಭ್ಯವಿರುವ ಕಾರ್ಮಿಕ",

            "Busy Worker":
                "ಕಾರ್ಯನಿರತ ಕಾರ್ಮಿಕ",

            "Offline Worker":
                "ಆಫ್‌ಲೈನ್ ಕಾರ್ಮಿಕ",

            "FairMatch":
                "ಫೇರ್‌ಮ್ಯಾಚ್",

            "Skill Match":
                "ಕೌಶಲ್ಯ ಹೊಂದಾಣಿಕೆ",

            "Availability":
                "ಲಭ್ಯತೆ",

            "Distance":
                "ದೂರ",

            "Workload Fairness":
                "ಕೆಲಸದ ಹೊರೆ ನ್ಯಾಯ",

            "Change Service":
                "ಸೇವೆಯನ್ನು ಬದಲಾಯಿಸಿ",

            "Customer Home":
                "ಗ್ರಾಹಕ ಮುಖಪುಟ",

            "Rating":
                "ರೇಟಿಂಗ್",

            "Available":
                "ಲಭ್ಯ",

            "Busy":
                "ಕಾರ್ಯನಿರತ",

            "Offline":
                "ಆಫ್‌ಲೈನ್",

            "Verified":
                "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",

            "View FairMatch":
                "ಫೇರ್‌ಮ್ಯಾಚ್ ವೀಕ್ಷಿಸಿ",

            "Smart and fair worker recommendation":
                "ಸ್ಮಾರ್ಟ್ ಮತ್ತು ನ್ಯಾಯಯುತ ಕಾರ್ಮಿಕ ಶಿಫಾರಸು",

            "Service:":
                "ಸೇವೆ:",

            "Match Analysis":
                "ಹೊಂದಾಣಿಕೆ ವಿಶ್ಲೇಷಣೆ",

            "FairMatch Score":
                "ಫೇರ್‌ಮ್ಯಾಚ್ ಸ್ಕೋರ್",

            "Excellent Match":
                "ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆ",

            "Good Match":
                "ಉತ್ತಮ ಹೊಂದಾಣಿಕೆ",

            "Lower Priority Match":
                "ಕಡಿಮೆ ಆದ್ಯತೆಯ ಹೊಂದಾಣಿಕೆ",

            "BOOK THIS WORKER":
                "ಈ ಕಾರ್ಮಿಕರನ್ನು ಬುಕ್ ಮಾಡಿ",

            "Back to Map":
                "ನಕ್ಷೆಗೆ ಹಿಂತಿರುಗಿ",

            "Booking Status":
                "ಬುಕ್ಕಿಂಗ್ ಸ್ಥಿತಿ",

            "Service Progress":
                "ಸೇವೆಯ ಪ್ರಗತಿ",

            "Requested":
                "ವಿನಂತಿಸಲಾಗಿದೆ",

            "Accepted":
                "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",

            "In Progress":
                "ಪ್ರಗತಿಯಲ್ಲಿದೆ",

            "Completed":
                "ಪೂರ್ಣಗೊಂಡಿದೆ",

            "Booking ID:":
                "ಬುಕ್ಕಿಂಗ್ ಐಡಿ:",

            "Worker:":
                "ಕಾರ್ಮಿಕ:",

            "Amount:":
                "ಮೊತ್ತ:",

            "Status:":
                "ಸ್ಥಿತಿ:",

            "Waiting for Worker":
                "ಕಾರ್ಮಿಕರಿಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",

            "Worker Accepted":
                "ಕಾರ್ಮಿಕರು ಸ್ವೀಕರಿಸಿದ್ದಾರೆ",

            "Service In Progress":
                "ಸೇವೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ",

            "Service Completed":
                "ಸೇವೆ ಪೂರ್ಣಗೊಂಡಿದೆ",

            "Continue to Payment":
                "ಪಾವತಿಗೆ ಮುಂದುವರಿಯಿರಿ",

            "Payment":
                "ಪಾವತಿ",

            "Payment simulation":
                "ಪಾವತಿ ಸಿಮ್ಯುಲೇಶನ್",

            "Service Charge:":
                "ಸೇವಾ ಶುಲ್ಕ:",

            "Pay ₹500":
                "₹500 ಪಾವತಿಸಿ",

            "Payment Successful!":
                "ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",

            "Your payment has been recorded.":
                "ನಿಮ್ಮ ಪಾವತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ.",

            "Amount Paid:":
                "ಪಾವತಿಸಿದ ಮೊತ್ತ:",

            "Paid":
                "ಪಾವತಿಸಲಾಗಿದೆ",

            "View Invoice":
                "ಇನ್ವಾಯ್ಸ್ ವೀಕ್ಷಿಸಿ",

            "Rate Worker":
                "ಕಾರ್ಮಿಕರಿಗೆ ರೇಟಿಂಗ್ ನೀಡಿ",

            "Digital Invoice":
                "ಡಿಜಿಟಲ್ ಇನ್ವಾಯ್ಸ್",

            "How was your experience?":
                "ನಿಮ್ಮ ಅನುಭವ ಹೇಗಿತ್ತು?",

            "Excellent":
                "ಅತ್ಯುತ್ತಮ",

            "Good":
                "ಉತ್ತಮ",

            "Average":
                "ಸರಾಸರಿ",

            "Thank you for your feedback!":
                "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!",

            "No active booking":
                "ಯಾವುದೇ ಸಕ್ರಿಯ ಬುಕ್ಕಿಂಗ್ ಇಲ್ಲ",

            "Current Service":
                "ಪ್ರಸ್ತುತ ಸೇವೆ",

            "Track Booking":
                "ಬುಕ್ಕಿಂಗ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",

            "Find an available worker quickly.":
                "ಲಭ್ಯವಿರುವ ಕಾರ್ಮಿಕರನ್ನು ತ್ವರಿತವಾಗಿ ಹುಡುಕಿ.",

            "Electrical Emergency":
                "ವಿದ್ಯುತ್ ತುರ್ತು ಸೇವೆ",

            "Plumbing Emergency":
                "ಪ್ಲಂಬಿಂಗ್ ತುರ್ತು ಸೇವೆ",

            "Vehicle Emergency":
                "ವಾಹನ ತುರ್ತು ಸೇವೆ",

            "Verified Workers":
                "ಪರಿಶೀಲಿಸಲಾದ ಕಾರ್ಮಿಕರು",

            "Worker Dashboard":
                "ಕಾರ್ಮಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

            "Welcome, Ramesh Kumar!":
                "ಸ್ವಾಗತ, ರಮೇಶ್ ಕುಮಾರ್!",

            "My Availability":
                "ನನ್ನ ಲಭ್ಯತೆ",

            "Current Status:":
                "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ:",

            "Set Available":
                "ಲಭ್ಯ ಎಂದು ಹೊಂದಿಸಿ",

            "Set Busy":
                "ಕಾರ್ಯನಿರತ ಎಂದು ಹೊಂದಿಸಿ",

            "Set Offline":
                "ಆಫ್‌ಲೈನ್ ಎಂದು ಹೊಂದಿಸಿ",

            "Customer Booking":
                "ಗ್ರಾಹಕರ ಬುಕ್ಕಿಂಗ್",

            "Customer:":
                "ಗ್ರಾಹಕ:",

            "Location:":
                "ಸ್ಥಳ:",

            "Accept Job":
                "ಕೆಲಸ ಸ್ವೀಕರಿಸಿ",

            "Reject":
                "ತಿರಸ್ಕರಿಸಿ",

            "Start Service":
                "ಸೇವೆ ಪ್ರಾರಂಭಿಸಿ",

            "Mark Job Completed":
                "ಕೆಲಸ ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ",

            "Today's Summary":
                "ಇಂದಿನ ಸಾರಾಂಶ",

            "Jobs Completed:":
                "ಪೂರ್ಣಗೊಂಡ ಕೆಲಸಗಳು:",

            "Total Earnings:":
                "ಒಟ್ಟು ಗಳಿಕೆ:",

            "Worker Welfare":
                "ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ",

            "Cooperative Member:":
                "ಸಹಕಾರಿ ಸದಸ್ಯ:",

            "Skill Verification:":
                "ಕೌಶಲ್ಯ ಪರಿಶೀಲನೆ:",

            "Welfare Status:":
                "ಕಲ್ಯಾಣ ಸ್ಥಿತಿ:",

            "Active":
                "ಸಕ್ರಿಯ",

            "Cooperative Admin":
                "ಸಹಕಾರಿ ನಿರ್ವಾಹಕ",

            "Cooperative network overview":
                "ಸಹಕಾರಿ ಜಾಲದ ಅವಲೋಕನ",

            "Workers":
                "ಕಾರ್ಮಿಕರು",

            "Registered:":
                "ನೋಂದಾಯಿತ:",

            "Verified:":
                "ಪರಿಶೀಲಿಸಲಾಗಿದೆ:",

            "Available:":
                "ಲಭ್ಯ:",

            "Live Availability":
                "ಲೈವ್ ಲಭ್ಯತೆ",

            "Live Booking":
                "ಲೈವ್ ಬುಕ್ಕಿಂಗ್",

            "Average Match Score:":
                "ಸರಾಸರಿ ಹೊಂದಾಣಿಕೆ ಸ್ಕೋರ್:",

            "Fair Distribution:":
                "ನ್ಯಾಯಯುತ ವಿತರಣೆ:",

            "Workers Receiving Jobs:":
                "ಕೆಲಸ ಪಡೆಯುತ್ತಿರುವ ಕಾರ್ಮಿಕರು:",

            "Open Demand Heatmap":
                "ಬೇಡಿಕೆ ಹೀಟ್‌ಮ್ಯಾಪ್ ತೆರೆಯಿರಿ",

            "Service Demand Heatmap":
                "ಸೇವಾ ಬೇಡಿಕೆ ಹೀಟ್‌ಮ್ಯಾಪ್",

            "Understand where customers need workers":
                "ಗ್ರಾಹಕರಿಗೆ ಎಲ್ಲಿ ಕಾರ್ಮಿಕರು ಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ",

            "HIGH DEMAND":
                "ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ",

            "More workers needed":
                "ಹೆಚ್ಚಿನ ಕಾರ್ಮಿಕರು ಅಗತ್ಯ",

            "MEDIUM DEMAND":
                "ಮಧ್ಯಮ ಬೇಡಿಕೆ",

            "Normal activity":
                "ಸಾಮಾನ್ಯ ಚಟುವಟಿಕೆ",

            "LOW DEMAND":
                "ಕಡಿಮೆ ಬೇಡಿಕೆ",

            "Enough workers":
                "ಸಾಕಷ್ಟು ಕಾರ್ಮಿಕರು",

            "Demand Areas":
                "ಬೇಡಿಕೆ ಪ್ರದೇಶಗಳು",

            "Central Area":
                "ಕೇಂದ್ರ ಪ್ರದೇಶ",

            "North Area":
                "ಉತ್ತರ ಪ್ರದೇಶ",

            "South Area":
                "ದಕ್ಷಿಣ ಪ್ರದೇಶ",

            "Cooperative Recommendation":
                "ಸಹಕಾರಿ ಶಿಫಾರಸು",

            "Central Demand Zone":
                "ಕೇಂದ್ರ ಬೇಡಿಕೆ ವಲಯ",

            "North Demand Zone":
                "ಉತ್ತರ ಬೇಡಿಕೆ ವಲಯ",

            "South Demand Zone":
                "ದಕ್ಷಿಣ ಬೇಡಿಕೆ ವಲಯ",

            "Requests:":
                "ವಿನಂತಿಗಳು:",

            "Available workers:":
                "ಲಭ್ಯವಿರುವ ಕಾರ್ಮಿಕರು:",

            "Recommended action:":
                "ಶಿಫಾರಸು ಮಾಡಿದ ಕ್ರಮ:",

            "Add electricians":
                "ಎಲೆಕ್ಟ್ರಿಷಿಯನ್‌ಗಳನ್ನು ಸೇರಿಸಿ",

            "More workers required.":
                "ಹೆಚ್ಚಿನ ಕಾರ್ಮಿಕರು ಅಗತ್ಯವಿದೆ.",

            "Current worker supply is sufficient.":
                "ಪ್ರಸ್ತುತ ಕಾರ್ಮಿಕರ ಪೂರೈಕೆ ಸಾಕಷ್ಟಿದೆ.",

            "CO-OP SEVA":
                "ಕೋ-ಆಪ್ ಸೇವಾ",

            "Booking accepted!":
                "ಬುಕ್ಕಿಂಗ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!",

            "Service started!":
                "ಸೇವೆ ಪ್ರಾರಂಭವಾಗಿದೆ!",

            "Booking rejected.":
                "ಬುಕ್ಕಿಂಗ್ ತಿರಸ್ಕರಿಸಲಾಗಿದೆ.",

            "Service completed!":
                "ಸೇವೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",

            "Thank you for your feedback!":
                "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!"
        },


        ta: {

            "Customer Dashboard":
                "வாடிக்கையாளர் டாஷ்போர்டு",

            "Find a Service":
                "சேவையைத் தேடுங்கள்",

            "Emergency Service":
                "அவசர சேவை",

            "My Bookings":
                "எனது முன்பதிவுகள்",

            "Why Trust Co-Op Seva?":
                "கோ-ஆப் சேவாவை ஏன் நம்ப வேண்டும்?",

            "Logout":
                "வெளியேறு",

            "Select a Service":
                "சேவையைத் தேர்ந்தெடுக்கவும்",

            "Choose the service you need":
                "உங்களுக்கு தேவையான சேவையைத் தேர்ந்தெடுக்கவும்",

            "Electrician":
                "எலக்ட்ரீஷியன்",

            "Plumber":
                "பிளம்பர்",

            "Carpenter":
                "தச்சர்",

            "Painter":
                "பெயிண்டர்",

            "Cleaning":
                "சுத்தம்",

            "Mechanic":
                "மெக்கானிக்",

            "Back":
                "பின்",

            "Co-Op Live Service Map":
                "கோ-ஆப் நேரடி சேவை வரைபடம்",

            "workers near your location":
                "உங்கள் இருப்பிடத்திற்கு அருகிலுள்ள பணியாளர்கள்",

            "Your Location":
                "உங்கள் இருப்பிடம்",

            "Available Worker":
                "கிடைக்கும் பணியாளர்",

            "Busy Worker":
                "பிஸியான பணியாளர்",

            "Offline Worker":
                "ஆஃப்லைன் பணியாளர்",

            "FairMatch":
                "ஃபேர்மேட்ச்",

            "Skill Match":
                "திறன் பொருத்தம்",

            "Availability":
                "கிடைக்கும் நிலை",

            "Distance":
                "தூரம்",

            "Workload Fairness":
                "வேலைச்சுமை நியாயம்",

            "Change Service":
                "சேவையை மாற்றவும்",

            "Customer Home":
                "வாடிக்கையாளர் முகப்பு",

            "Rating":
                "மதிப்பீடு",

            "Available":
                "கிடைக்கும்",

            "Busy":
                "பிஸி",

            "Offline":
                "ஆஃப்லைன்",

            "Verified":
                "சரிபார்க்கப்பட்டது",

            "View FairMatch":
                "ஃபேர்மேட்சைப் பார்க்கவும்",

            "Smart and fair worker recommendation":
                "ஸ்மார்ட் மற்றும் நியாயமான பணியாளர் பரிந்துரை",

            "Service:":
                "சேவை:",

            "Match Analysis":
                "பொருத்தம் பகுப்பாய்வு",

            "FairMatch Score":
                "ஃபேர்மேட்ச் மதிப்பெண்",

            "Excellent Match":
                "சிறந்த பொருத்தம்",

            "Good Match":
                "நல்ல பொருத்தம்",

            "Lower Priority Match":
                "குறைந்த முன்னுரிமை பொருத்தம்",

            "BOOK THIS WORKER":
                "இந்த பணியாளரை முன்பதிவு செய்யவும்",

            "Back to Map":
                "வரைபடத்திற்குத் திரும்பவும்",

            "Booking Status":
                "முன்பதிவு நிலை",

            "Service Progress":
                "சேவை முன்னேற்றம்",

            "Requested":
                "கோரப்பட்டது",

            "Accepted":
                "ஏற்றுக்கொள்ளப்பட்டது",

            "In Progress":
                "நடைபெறுகிறது",

            "Completed":
                "முடிந்தது",

            "Booking ID:":
                "முன்பதிவு ஐடி:",

            "Worker:":
                "பணியாளர்:",

            "Amount:":
                "தொகை:",

            "Status:":
                "நிலை:",

            "Waiting for Worker":
                "பணியாளருக்காக காத்திருக்கிறது",

            "Worker Accepted":
                "பணியாளர் ஏற்றுக்கொண்டார்",

            "Service In Progress":
                "சேவை நடைபெறுகிறது",

            "Service Completed":
                "சேவை முடிந்தது",

            "Continue to Payment":
                "கட்டணத்திற்குத் தொடரவும்",

            "Payment":
                "கட்டணம்",

            "Payment simulation":
                "கட்டண சிமுலேஷன்",

            "Service Charge:":
                "சேவை கட்டணம்:",

            "Pay ₹500":
                "₹500 செலுத்தவும்",

            "Payment Successful!":
                "கட்டணம் வெற்றிகரமாக முடிந்தது!",

            "Your payment has been recorded.":
                "உங்கள் கட்டணம் பதிவு செய்யப்பட்டுள்ளது.",

            "Amount Paid:":
                "செலுத்திய தொகை:",

            "Paid":
                "செலுத்தப்பட்டது",

            "View Invoice":
                "இன்வாய்ஸைப் பார்க்கவும்",

            "Rate Worker":
                "பணியாளருக்கு மதிப்பீடு அளிக்கவும்",

            "Digital Invoice":
                "டிஜிட்டல் இன்வாய்ஸ்",

            "How was your experience?":
                "உங்கள் அனுபவம் எப்படி இருந்தது?",

            "Excellent":
                "சிறப்பு",

            "Good":
                "நல்லது",

            "Average":
                "சராசரி",

            "Thank you for your feedback!":
                "உங்கள் கருத்துக்கு நன்றி!",

            "No active booking":
                "செயலில் உள்ள முன்பதிவு இல்லை",

            "Current Service":
                "தற்போதைய சேவை",

            "Track Booking":
                "முன்பதிவைக் கண்காணிக்கவும்",

            "Find an available worker quickly.":
                "கிடைக்கும் பணியாளரை விரைவாகக் கண்டறியவும்.",

            "Electrical Emergency":
                "மின்சார அவசர சேவை",

            "Plumbing Emergency":
                "குழாய் அவசர சேவை",

            "Vehicle Emergency":
                "வாகன அவசர சேவை",

            "Verified Workers":
                "சரிபார்க்கப்பட்ட பணியாளர்கள்",

            "Worker Dashboard":
                "பணியாளர் டாஷ்போர்டு",

            "Welcome, Ramesh Kumar!":
                "வரவேற்கிறோம், ரமேஷ் குமார்!",

            "My Availability":
                "எனது கிடைக்கும் நிலை",

            "Current Status:":
                "தற்போதைய நிலை:",

            "Set Available":
                "கிடைக்கும் என அமைக்கவும்",

            "Set Busy":
                "பிஸி என அமைக்கவும்",

            "Set Offline":
                "ஆஃப்லைன் என அமைக்கவும்",

            "Customer Booking":
                "வாடிக்கையாளர் முன்பதிவு",

            "Customer:":
                "வாடிக்கையாளர்:",

            "Location:":
                "இருப்பிடம்:",

            "Accept Job":
                "வேலையை ஏற்கவும்",

            "Reject":
                "நிராகரிக்கவும்",

            "Start Service":
                "சேவையைத் தொடங்கவும்",

            "Mark Job Completed":
                "வேலை முடிந்ததாகக் குறிக்கவும்",

            "Today's Summary":
                "இன்றைய சுருக்கம்",

            "Jobs Completed:":
                "முடிக்கப்பட்ட வேலைகள்:",

            "Total Earnings:":
                "மொத்த வருமானம்:",

            "Worker Welfare":
                "பணியாளர் நலன்",

            "Cooperative Member:":
                "கூட்டுறவு உறுப்பினர்:",

            "Skill Verification:":
                "திறன் சரிபார்ப்பு:",

            "Welfare Status:":
                "நலன் நிலை:",

            "Active":
                "செயலில்",

            "Cooperative Admin":
                "கூட்டுறவு நிர்வாகி",

            "Cooperative network overview":
                "கூட்டுறவு வலையமைப்பு கண்ணோட்டம்",

            "Workers":
                "பணியாளர்கள்",

            "Registered:":
                "பதிவு செய்யப்பட்டவை:",

            "Verified:":
                "சரிபார்க்கப்பட்டவை:",

            "Available:":
                "கிடைக்கும்:",

            "Live Availability":
                "நேரடி கிடைக்கும் நிலை",

            "Live Booking":
                "நேரடி முன்பதிவு",

            "Average Match Score:":
                "சராசரி பொருத்த மதிப்பெண்:",

            "Fair Distribution:":
                "நியாயமான பகிர்வு:",

            "Workers Receiving Jobs:":
                "வேலை பெறும் பணியாளர்கள்:",

            "Open Demand Heatmap":
                "தேவை ஹீட்மேப்பைத் திறக்கவும்",

            "Service Demand Heatmap":
                "சேவை தேவை ஹீட்மேப்",

            "Understand where customers need workers":
                "வாடிக்கையாளர்களுக்கு எங்கு பணியாளர்கள் தேவை என்பதை அறியவும்",

            "HIGH DEMAND":
                "அதிக தேவை",

            "More workers needed":
                "மேலும் பணியாளர்கள் தேவை",

            "MEDIUM DEMAND":
                "நடுத்தர தேவை",

            "Normal activity":
                "சாதாரண செயல்பாடு",

            "LOW DEMAND":
                "குறைந்த தேவை",

            "Enough workers":
                "போதுமான பணியாளர்கள்",

            "Demand Areas":
                "தேவை பகுதிகள்",

            "Central Area":
                "மத்திய பகுதி",

            "North Area":
                "வடக்கு பகுதி",

            "South Area":
                "தெற்கு பகுதி",

            "Cooperative Recommendation":
                "கூட்டுறவு பரிந்துரை",

            "Central Demand Zone":
                "மத்திய தேவை மண்டலம்",

            "North Demand Zone":
                "வடக்கு தேவை மண்டலம்",

            "South Demand Zone":
                "தெற்கு தேவை மண்டலம்",

            "Requests:":
                "கோரிக்கைகள்:",

            "Available workers:":
                "கிடைக்கும் பணியாளர்கள்:",

            "Recommended action:":
                "பரிந்துரைக்கப்பட்ட நடவடிக்கை:",

            "Add electricians":
                "எலக்ட்ரீஷியன்களைச் சேர்க்கவும்",

            "More workers required.":
                "மேலும் பணியாளர்கள் தேவை.",

            "Current worker supply is sufficient.":
                "தற்போதைய பணியாளர் வழங்கல் போதுமானது.",

            "CO-OP SEVA":
                "கோ-ஆப் சேவா",

            "Booking accepted!":
                "முன்பதிவு ஏற்றுக்கொள்ளப்பட்டது!",

            "Service started!":
                "சேவை தொடங்கப்பட்டது!",

            "Booking rejected.":
                "முன்பதிவு நிராகரிக்கப்பட்டது.",

            "Service completed!":
                "சேவை முடிந்தது!",

            "Thank you for your feedback!":
                "உங்கள் கருத்துக்கு நன்றி!"
        }

    };


    // ==================== LANGUAGE STATE ====================

    let currentLanguage =
        localStorage.getItem("coOpLanguage") || "en";


    const originalText =
        new WeakMap();


    let translating = false;


    // ==================== TRANSLATE ONE TEXT ====================

    function translateText(text) {

        if (!text || !text.trim()) {
            return text;
        }


        if (currentLanguage === "en") {
            return text;
        }


        const dictionary =
            translations[currentLanguage] || {};


        if (dictionary[text]) {
            return dictionary[text];
        }


        let result = text;


        const keys =
            Object.keys(dictionary)
                .sort(function (a, b) {
                    return b.length - a.length;
                });


        keys.forEach(function (key) {

            if (
                key.length > 2 &&
                result.includes(key)
            ) {

                result =
                    result.split(key)
                        .join(dictionary[key]);

            }

        });


        return result;
    }


    // ==================== TRANSLATE WHOLE PAGE ====================

    function translatePage() {

        if (
            translating ||
            !document.body
        ) {
            return;
        }


        translating = true;


        try {

            const walker =
                document.createTreeWalker(
                    document.body,
                    NodeFilter.SHOW_TEXT
                );


            const nodes = [];

            let node;


            while (
                (node = walker.nextNode())
            ) {

                nodes.push(node);

            }


            nodes.forEach(function (textNode) {

                if (
                    textNode.parentElement &&
                    textNode.parentElement.closest(
                        ".language-switcher"
                    )
                ) {

                    return;

                }


                if (
                    !originalText.has(textNode)
                ) {

                    originalText.set(
                        textNode,
                        textNode.nodeValue
                    );

                }


                const source =
                    originalText.get(textNode);


                if (
                    source &&
                    source.trim()
                ) {

                    textNode.nodeValue =
                        translateText(source);

                }

            });

        }

        finally {

            translating = false;

        }

    }


    // ==================== LANGUAGE SELECTOR ====================

    function createLanguageSelector() {

        if (!document.body) {
            return;
        }


        if (
            document.querySelector(
                ".language-switcher"
            )
        ) {

            return;

        }


        const container =
            document.createElement("div");


        container.className =
            "language-switcher";


        container.style.cssText = `
            position:fixed;
            top:14px;
            right:14px;
            z-index:99999;
            background:white;
            padding:7px 10px;
            border-radius:12px;
            box-shadow:0 4px 16px rgba(0,0,0,.15);
            font-family:Arial,sans-serif;
        `;


        container.innerHTML = `

            <span style="
                font-size:14px;
                font-weight:bold;
                margin-right:5px;
            ">
                🌐
            </span>

            <select
                id="coOpLanguage"
                style="
                    border:1px solid #ccc;
                    border-radius:8px;
                    padding:6px;
                    background:white;
                    font-size:13px;
                "
            >

                <option value="en">
                    English
                </option>

                <option value="hi">
                    हिंदी
                </option>

                <option value="kn">
                    ಕನ್ನಡ
                </option>

                <option value="ta">
                    தமிழ்
                </option>

            </select>
        `;


        document.body.appendChild(
            container
        );


        const selector =
            document.getElementById(
                "coOpLanguage"
            );


        selector.value =
            currentLanguage;


        selector.addEventListener(
            "change",
            function () {

                currentLanguage =
                    selector.value;


                localStorage.setItem(
                    "coOpLanguage",
                    currentLanguage
                );


                translatePage();

            }
        );

    }


    // ==================== REFRESH LANGUAGE SYSTEM ====================

    function refreshLanguageSystem() {

        if (!document.body) {
            return;
        }


        createLanguageSelector();


        const selector =
            document.getElementById(
                "coOpLanguage"
            );


        if (selector) {

            selector.value =
                currentLanguage;

        }


        setTimeout(
            translatePage,
            0
        );

    }


    // ==================== WATCH NEW SCREENS ====================

    const observer =
        new MutationObserver(
            function () {

                if (!translating) {

                    refreshLanguageSystem();

                }

            }
        );


    // ==================== START ====================

    function startLanguageSystem() {

        refreshLanguageSystem();


        observer.observe(
            document.body,
            {
                childList:true,
                subtree:true
            }
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startLanguageSystem
        );

    }

    else {

        startLanguageSystem();

    }


    // ==================== GLOBAL MESSAGE TRANSLATOR ====================

    window.translateMessage =
        function (message) {

            return translateText(message);
            // ================= LANGUAGE SELECTOR =================

(function addLanguageSelector() {

    if (document.getElementById("languageSelector")) return;

    const selector = document.createElement("select");

    selector.id = "languageSelector";

    selector.innerHTML = `
        <option value="en">🇬🇧 English</option>
        <option value="hi">🇮🇳 हिन्दी</option>
        <option value="kn">🇮🇳 ಕನ್ನಡ</option>
        <option value="ta">🇮🇳 தமிழ்</option>
    `;

    selector.style.position = "fixed";
    selector.style.top = "15px";
    selector.style.right = "15px";
    selector.style.zIndex = "99999";
    selector.style.padding = "10px 14px";
    selector.style.borderRadius = "10px";
    selector.style.border = "1px solid #ccc";
    selector.style.background = "white";
    selector.style.color = "#222";
    selector.style.fontSize = "14px";
    selector.style.fontWeight = "600";
    selector.style.cursor = "pointer";
    selector.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";

    document.body.appendChild(selector);

    selector.addEventListener("change", function () {

        localStorage.setItem("coOpLanguage", this.value);

        alert(
            this.value === "en"
                ? "Language changed to English"
                : this.value === "hi"
                ? "भाषा हिन्दी में बदल दी गई है"
                : this.value === "kn"
                ? "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ"
                : "மொழி தமிழுக்கு மாற்றப்பட்டது"
        );

    });

    const savedLanguage = localStorage.getItem("coOpLanguage");

    if (savedLanguage) {
        selector.value = savedLanguage;
    }

})();

        };

})();
/* =========================================================
   CO-OP SEVA - LANGUAGE SELECTION POPUP
   ========================================================= */

(function () {

    // Check whether the user has already selected a language
    const savedLanguage = localStorage.getItem("coOpLanguage");

    // Create popup
    const languagePopup = document.createElement("div");

    languagePopup.id = "languagePopup";

    languagePopup.innerHTML = `
        <div class="language-overlay">

            <div class="language-box">

                <div class="language-icon">
                    🌐
                </div>

                <h2>Welcome to CO-OP SEVA</h2>

                <p class="language-subtitle">
                    Choose your preferred language
                </p>

                <div class="language-options">

                    <button class="language-option" data-lang="en">
                        🇬🇧 English
                    </button>

                    <button class="language-option" data-lang="hi">
                        🇮🇳 हिन्दी
                    </button>

                    <button class="language-option" data-lang="kn">
                        🇮🇳 ಕನ್ನಡ
                    </button>

                    <button class="language-option" data-lang="ta">
                        🇮🇳 தமிழ்
                    </button>

                </div>

                <button id="continueLanguageBtn">
                    Continue →
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(languagePopup);


    // Add popup styling
    const languageStyle = document.createElement("style");

    languageStyle.innerHTML = `

        #languagePopup {
            position: fixed;
            inset: 0;
            z-index: 99999;
        }

        .language-overlay {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(5px);
            padding: 20px;
            box-sizing: border-box;
        }

        .language-box {
            width: 100%;
            max-width: 430px;
            background: white;
            border-radius: 24px;
            padding: 35px 30px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.25);
            animation: languagePopupIn 0.35s ease;
            box-sizing: border-box;
        }

        .language-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }

        .language-box h2 {
            margin: 5px 0 8px;
            font-size: 26px;
            color: #222;
        }

        .language-subtitle {
            margin: 0 0 25px;
            color: #666;
            font-size: 15px;
        }

        .language-options {
            display: grid;
            gap: 12px;
            margin-bottom: 22px;
        }

        .language-option {
            width: 100%;
            padding: 14px 18px;
            border: 2px solid #e5e5e5;
            border-radius: 12px;
            background: white;
            font-size: 16px;
            cursor: pointer;
            text-align: left;
            transition: 0.2s ease;
        }

        .language-option:hover {
            transform: translateY(-2px);
            border-color: #4f46e5;
            background: #f5f3ff;
        }

        .language-option.selected {
            border-color: #4f46e5;
            background: #eeeafe;
            font-weight: bold;
        }

        #continueLanguageBtn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 12px;
            background: #4f46e5;
            color: white;
            font-size: 17px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s ease;
        }

        #continueLanguageBtn:hover {
            transform: translateY(-2px);
            opacity: 0.92;
        }

        @keyframes languagePopupIn {

            from {
                opacity: 0;
                transform: scale(0.9);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }

        }

        @media (max-width: 500px) {

            .language-box {
                padding: 30px 20px;
            }

            .language-box h2 {
                font-size: 23px;
            }

        }

    `;

    document.head.appendChild(languageStyle);


    // Selected language
    let selectedLanguage = savedLanguage || "en";


    // Highlight selected language
    function highlightLanguage() {

        document.querySelectorAll(".language-option").forEach(button => {

            button.classList.remove("selected");

            if (button.dataset.lang === selectedLanguage) {
                button.classList.add("selected");
            }

        });

    }


    // Select language
    document.querySelectorAll(".language-option").forEach(button => {

        button.addEventListener("click", function () {

            selectedLanguage = this.dataset.lang;

            highlightLanguage();

        });

    });


    // Continue button
    document.getElementById("continueLanguageBtn")
        .addEventListener("click", function () {

            localStorage.setItem(
                "coOpLanguage",
                selectedLanguage
            );

            languagePopup.remove();

            // Use existing translation system if available
            if (typeof window.applyLanguage === "function") {
                window.applyLanguage(selectedLanguage);
            }

            if (typeof window.translatePage === "function") {
                window.translatePage(selectedLanguage);
            }

        });


    // If language was already selected,
    // don't show popup again
    if (savedLanguage) {

        languagePopup.remove();

    } else {

        highlightLanguage();

    }

})();
/* =========================================================
   CO-OP SEVA - LANGUAGE SELECTION POPUP
   Adds a popup for English / Hindi / Kannada / Tamil
   ========================================================= */

(function () {

    function showLanguagePopup() {

        /* Remove old popup if it already exists */
        const oldPopup = document.getElementById("coOpLanguagePopup");
        if (oldPopup) {
            oldPopup.remove();
        }

        /* Create popup background */
        const overlay = document.createElement("div");
        overlay.id = "coOpLanguagePopup";

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.65)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "999999";
        overlay.style.fontFamily = "Arial, sans-serif";

        /* Popup box */
        const popup = document.createElement("div");

        popup.style.width = "90%";
        popup.style.maxWidth = "430px";
        popup.style.background = "#ffffff";
        popup.style.borderRadius = "22px";
        popup.style.padding = "32px";
        popup.style.boxSizing = "border-box";
        popup.style.textAlign = "center";
        popup.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
        popup.style.animation = "coOpPopupAppear 0.35s ease";

        /* Add animation */
        const style = document.createElement("style");

        style.innerHTML = `
            @keyframes coOpPopupAppear {
                from {
                    opacity: 0;
                    transform: scale(0.85);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            #coOpLanguagePopup select:focus {
                outline: none;
                border-color: #2563eb;
                box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
            }

            #coOpLanguageContinue:hover {
                transform: translateY(-1px);
                box-shadow: 0 8px 20px rgba(37,99,235,0.25);
            }
        `;

        document.head.appendChild(style);

        /* Globe icon */
        const icon = document.createElement("div");

        icon.innerHTML = "🌐";

        icon.style.fontSize = "48px";
        icon.style.marginBottom = "10px";

        /* Title */
        const title = document.createElement("h2");

        title.innerText = "Choose Your Language";

        title.style.margin = "5px 0 8px";
        title.style.fontSize = "25px";
        title.style.color = "#111827";

        /* Subtitle */
        const subtitle = document.createElement("p");

        subtitle.innerText =
            "Select your preferred language for Co-Op Seva";

        subtitle.style.margin = "0 0 25px";
        subtitle.style.color = "#6b7280";
        subtitle.style.fontSize = "15px";

        /* Language select */
        const select = document.createElement("select");

        select.id = "coOpPopupLanguage";

        select.style.width = "100%";
        select.style.padding = "14px";
        select.style.borderRadius = "12px";
        select.style.border = "2px solid #e5e7eb";
        select.style.background = "#ffffff";
        select.style.fontSize = "16px";
        select.style.cursor = "pointer";
        select.style.marginBottom = "20px";

        /* Languages */
        const languages = [
            {
                value: "en",
                text: "🇬🇧  English"
            },
            {
                value: "hi",
                text: "🇮🇳  हिन्दी"
            },
            {
                value: "kn",
                text: "🇮🇳  ಕನ್ನಡ"
            },
            {
                value: "ta",
                text: "🇮🇳  தமிழ்"
            }
        ];

        languages.forEach(function (lang) {

            const option = document.createElement("option");

            option.value = lang.value;
            option.textContent = lang.text;

            select.appendChild(option);

        });

        /* Use previously selected language if available */
        const savedLanguage =
            localStorage.getItem("coOpLanguage");

        if (
            savedLanguage === "en" ||
            savedLanguage === "hi" ||
            savedLanguage === "kn" ||
            savedLanguage === "ta"
        ) {
            select.value = savedLanguage;
        } else {
            select.value = "en";
        }

        /* Continue button */
        const button = document.createElement("button");

        button.id = "coOpLanguageContinue";

        button.innerText = "Continue";

        button.style.width = "100%";
        button.style.padding = "14px";
        button.style.border = "none";
        button.style.borderRadius = "12px";
        button.style.background =
            "linear-gradient(135deg, #2563eb, #4f46e5)";
        button.style.color = "#ffffff";
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";
        button.style.cursor = "pointer";
        button.style.transition = "0.2s";

        /* Small note */
        const note = document.createElement("p");

        note.innerText =
            "You can change the language later.";

        note.style.fontSize = "12px";
        note.style.color = "#9ca3af";
        note.style.marginTop = "15px";
        note.style.marginBottom = "0";

        /* Add everything to popup */
        popup.appendChild(icon);
        popup.appendChild(title);
        popup.appendChild(subtitle);
        popup.appendChild(select);
        popup.appendChild(button);
        popup.appendChild(note);

        overlay.appendChild(popup);

        document.body.appendChild(overlay);

        /* Continue button action */
        button.addEventListener("click", function () {

            const selectedLanguage = select.value;

            /* Save selected language */
            localStorage.setItem(
                "coOpLanguage",
                selectedLanguage
            );

            /* Remember that popup was completed */
            localStorage.setItem(
                "coOpLanguagePopupDone",
                "true"
            );

            /* Update global language variable if it exists */
            try {
                if (typeof language !== "undefined") {
                    language = selectedLanguage;
                }
            } catch (error) {
                console.log(error);
            }

            /* Remove popup */
            overlay.remove();

            /* Translate existing page */
            try {

                if (typeof translatePage === "function") {
                    translatePage();
                }

            } catch (error) {

                console.log(
                    "Translation refresh error:",
                    error
                );

            }

            /* Refresh page text if the existing translation
               system uses refresh() */
            try {

                if (typeof refresh === "function") {
                    refresh();
                }

            } catch (error) {

                console.log(
                    "Refresh error:",
                    error
                );

            }

        });

    }


    /* =====================================================
       START POPUP
       ===================================================== */

    function startLanguagePopup() {

        /*
         * IMPORTANT:
         * We use a NEW storage key here.
         * This means your old language setting will NOT
         * prevent the popup from appearing.
         */

        const popupCompleted =
            localStorage.getItem(
                "coOpLanguagePopupDone"
            );

        /*
         * First visit:
         * show popup.
         */

        if (!popupCompleted) {

            showLanguagePopup();

        }

    }


    /* =====================================================
       RUN AFTER PAGE LOAD
       ===================================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            startLanguagePopup
        );

    } else {

        startLanguagePopup();

    }


    /* =====================================================
       GLOBAL FUNCTION
       Allows popup to be opened again later.
       ===================================================== */

    window.openLanguagePopup = function () {

        showLanguagePopup();

    };


})();
/* ============================================================
   CO-OP SEVA
   🌐 NEW LANGUAGE POPUP + COMPLETE LANGUAGE SWITCHER
   ============================================================ */

(function () {

    "use strict";

    /* ========================================================
       LANGUAGE DATA
       ======================================================== */

    const COOP_LANGUAGES = {

        en: {
            name: "English",
            welcome: "Welcome!",
            select: "Select how you want to continue",
            customer: "I'm a Customer",
            worker: "I'm a Worker",
            admin: "Cooperative Admin",
            tagline:
                "Trusted Workers • Fair Bookings • Stronger Cooperatives"
        },

        hi: {
            name: "हिन्दी",
            welcome: "स्वागत है!",
            select: "जारी रखने के लिए चुनें",
            customer: "मैं ग्राहक हूँ",
            worker: "मैं एक कर्मचारी हूँ",
            admin: "सहकारी प्रशासक",
            tagline:
                "विश्वसनीय कर्मचारी • निष्पक्ष बुकिंग • मजबूत सहकारी समितियाँ"
        },

        kn: {
            name: "ಕನ್ನಡ",
            welcome: "ಸ್ವಾಗತ!",
            select:
                "ಮುಂದುವರಿಯಲು ನೀವು ಹೇಗೆ ಬಯಸುತ್ತೀರಿ ಎಂಬುದನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            customer: "ನಾನು ಗ್ರಾಹಕ",
            worker: "ನಾನು ಕೆಲಸಗಾರ",
            admin: "ಸಹಕಾರಿ ನಿರ್ವಾಹಕರು",
            tagline:
                "ವಿಶ್ವಾಸಾರ್ಹ ಕೆಲಸಗಾರರು • ನ್ಯಾಯಯುತ ಬುಕ್ಕಿಂಗ್‌ಗಳು • ಬಲವಾದ ಸಹಕಾರ ಸಂಘಗಳು"
        },

        ta: {
            name: "தமிழ்",
            welcome: "வரவேற்கிறோம்!",
            select:
                "தொடர விரும்பும் முறையைத் தேர்ந்தெடுக்கவும்",
            customer: "நான் வாடிக்கையாளர்",
            worker: "நான் தொழிலாளர்",
            admin: "கூட்டுறவு நிர்வாகி",
            tagline:
                "நம்பகமான தொழிலாளர்கள் • நியாயமான முன்பதிவுகள் • வலுவான கூட்டுறவுகள்"
        }

    };


    /* ========================================================
       REMOVE OLD POPUPS
       ======================================================== */

    function removeOldPopups() {

        const old1 =
            document.getElementById(
                "languagePopup"
            );

        const old2 =
            document.getElementById(
                "coOpLanguagePopup"
            );

        if (old1) {
            old1.remove();
        }

        if (old2) {
            old2.remove();
        }

    }


    /* ========================================================
       CREATE NEW POPUP
       ======================================================== */

    function createLanguagePopup() {

        /*
         * Don't create two copies.
         */

        if (
            document.getElementById(
                "coOpSevaNewLanguagePopup"
            )
        ) {
            return;
        }


        const popup =
            document.createElement("div");

        popup.id =
            "coOpSevaNewLanguagePopup";


        popup.innerHTML = `

            <div class="co-op-language-box">

                <div class="co-op-language-icon">
                    🌐
                </div>

                <h2>
                    Choose Your Language
                </h2>

                <p>
                    अपनी भाषा चुनें / ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ /
                    உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்
                </p>


                <div class="co-op-language-options">

                    <button
                        type="button"
                        class="co-op-language-option"
                        data-language="en"
                    >
                        🇬🇧 English
                    </button>


                    <button
                        type="button"
                        class="co-op-language-option"
                        data-language="hi"
                    >
                        🇮🇳 हिन्दी
                    </button>


                    <button
                        type="button"
                        class="co-op-language-option"
                        data-language="kn"
                    >
                        🇮🇳 ಕನ್ನಡ
                    </button>


                    <button
                        type="button"
                        class="co-op-language-option"
                        data-language="ta"
                    >
                        🇮🇳 தமிழ்
                    </button>

                </div>


                <button
                    type="button"
                    id="coOpSevaLanguageContinue"
                >
                    Continue
                </button>

            </div>

        `;


        document.body.appendChild(
            popup
        );


        /* ====================================================
           POPUP STYLING
           ==================================================== */

        const style =
            document.createElement("style");

        style.id =
            "coOpSevaLanguagePopupStyle";


        style.textContent = `

            #coOpSevaNewLanguagePopup {

                position: fixed;

                inset: 0;

                width: 100%;
                height: 100%;

                display: flex;

                align-items: center;
                justify-content: center;

                background:
                    rgba(0, 0, 0, 0.45);

                backdrop-filter:
                    blur(5px);

                z-index: 999999;

            }


            .co-op-language-box {

                width: min(430px, 90%);

                padding: 35px 30px;

                background: white;

                border-radius: 22px;

                text-align: center;

                box-shadow:
                    0 20px 60px
                    rgba(0, 0, 0, 0.25);

                animation:
                    coOpPopupAppear
                    0.3s ease;

            }


            @keyframes coOpPopupAppear {

                from {

                    opacity: 0;

                    transform:
                        translateY(20px)
                        scale(0.95);

                }

                to {

                    opacity: 1;

                    transform:
                        translateY(0)
                        scale(1);

                }

            }


            .co-op-language-icon {

                font-size: 42px;

                margin-bottom: 8px;

            }


            .co-op-language-box h2 {

                margin:
                    5px 0 8px;

                font-size: 25px;

                color: #176b45;

            }


            .co-op-language-box p {

                margin:
                    0 0 22px;

                color: #666;

                font-size: 14px;

                line-height: 1.5;

            }


            .co-op-language-options {

                display: flex;

                flex-direction: column;

                gap: 10px;

            }


            .co-op-language-option {

                width: 100%;

                padding: 13px;

                border-radius: 10px;

                border:
                    2px solid #e0e0e0;

                background: white;

                color: #333;

                font-size: 16px;

                font-weight: 600;

                cursor: pointer;

                transition:
                    0.2s ease;

            }


            .co-op-language-option:hover {

                border-color:
                    #218c59;

                background:
                    #f0faf5;

            }


            .co-op-language-option.selected {

                border-color:
                    #218c59;

                background:
                    #218c59;

                color: white;

            }


            #coOpSevaLanguageContinue {

                width: 100%;

                margin-top: 20px;

                padding: 14px;

                border: none;

                border-radius: 10px;

                background:
                    #218c59;

                color: white;

                font-size: 17px;

                font-weight: bold;

                cursor: pointer;

            }


            #coOpSevaLanguageContinue:hover {

                background:
                    #176b45;

            }

        `;


        document.head.appendChild(
            style
        );


        /* ====================================================
           DEFAULT LANGUAGE
           ==================================================== */

        let selectedLanguage =
            localStorage.getItem(
                "coOpLanguage"
            ) || "en";


        selectLanguageButton(
            selectedLanguage
        );


        /* ====================================================
           LANGUAGE BUTTONS
           ==================================================== */

        popup
            .querySelectorAll(
                ".co-op-language-option"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            selectedLanguage =
                                button.dataset.language;


                            selectLanguageButton(
                                selectedLanguage
                            );

                        }
                    );

                }
            );


        /* ====================================================
           CONTINUE BUTTON
           ==================================================== */

        document
            .getElementById(
                "coOpSevaLanguageContinue"
            )
            .addEventListener(
                "click",
                function () {

                    /*
                     * SAVE LANGUAGE
                     */

                    localStorage.setItem(
                        "coOpLanguage",
                        selectedLanguage
                    );


                    /*
                     * Tell the old app that
                     * language popup is complete.
                     */

                    localStorage.setItem(
                        "coOpLanguagePopupDone",
                        "true"
                    );


                    /*
                     * Remove popup.
                     */

                    popup.remove();


                    /*
                     * Apply language.
                     */

                    setTimeout(
                        function () {

                            applyCoOpSevaLanguage(
                                selectedLanguage
                            );

                        },
                        50
                    );

                }
            );


        function selectLanguageButton(
            language
        ) {

            popup
                .querySelectorAll(
                    ".co-op-language-option"
                )
                .forEach(
                    function (button) {

                        button.classList.remove(
                            "selected"
                        );

                    }
                );


            const selected =
                popup.querySelector(
                    `[data-language="${language}"]`
                );


            if (selected) {

                selected.classList.add(
                    "selected"
                );

            }

        }

    }


    /* ========================================================
       APPLY LANGUAGE TO LANDING PAGE
       ======================================================== */

    function applyCoOpSevaLanguage(
        language
    ) {

        const lang =
            COOP_LANGUAGES[
                language
            ] ||
            COOP_LANGUAGES.en;


        /*
         * Find visible welcome container.
         */

        const containers =
            document.querySelectorAll(
                ".welcome-container"
            );


        if (!containers.length) {
            return;
        }


        let container = null;


        containers.forEach(
            function (item) {

                if (
                    !container &&
                    item.offsetParent !== null
                ) {

                    container = item;

                }

            }
        );


        if (!container) {

            container =
                containers[0];

        }


        /* ====================================================
           FIND ELEMENTS
           ==================================================== */

        const headings =
            container.querySelectorAll(
                "h1, h2, h3"
            );


        headings.forEach(
            function (element) {

                const text =
                    element.textContent
                        .trim();


                if (
                    text === "Welcome!" ||
                    text === "स्वागत है!" ||
                    text === "ಸ್ವಾಗತ!" ||
                    text === "வரவேற்கிறோம்!"
                ) {

                    element.textContent =
                        lang.welcome;

                }

            }
        );


        /* ====================================================
           WELCOME / SELECT TEXT
           ==================================================== */

        container
            .querySelectorAll(
                "p, div, span"
            )
            .forEach(
                function (element) {

                    const text =
                        element.textContent
                            .replace(
                                /\s+/g,
                                " "
                            )
                            .trim();


                    if (
                        text ===
                            "Select how you want to continue" ||
                        text ===
                            "जारी रखने के लिए चुनें" ||
                        text ===
                            "ಮುಂದುವರಿಯಲು ನೀವು ಹೇಗೆ ಬಯಸುತ್ತೀರಿ ಎಂಬುದನ್ನು ಆಯ್ಕೆಮಾಡಿ" ||
                        text ===
                            "தொடர விரும்பும் முறையைத் தேர்ந்தெடுக்கவும்"
                    ) {

                        element.textContent =
                            lang.select;

                    }

                }
            );


        /* ====================================================
           TAGLINE
           ==================================================== */

        container
            .querySelectorAll("p")
            .forEach(
                function (element) {

                    const text =
                        element.textContent
                            .trim();


                    if (
                        text.includes(
                            "Trusted"
                        ) ||
                        text.includes(
                            "विश्वसनीय"
                        ) ||
                        text.includes(
                            "ವಿಶ್ವಾಸಾರ್ಹ"
                        ) ||
                        text.includes(
                            "நம்பகமான"
                        )
                    ) {

                        element.textContent =
                            lang.tagline;

                    }

                }
            );


        /* ====================================================
           BUTTONS
           ==================================================== */

        container
            .querySelectorAll(
                "button"
            )
            .forEach(
                function (button) {

                    const text =
                        button.textContent
                            .trim();


                    /*
                     * CUSTOMER
                     */

                    if (
                        text.includes(
                            "I'm a Customer"
                        ) ||
                        text.includes(
                            "मैं ग्राहक हूँ"
                        ) ||
                        text.includes(
                            "ನಾನು ಗ್ರಾಹಕ"
                        ) ||
                        text.includes(
                            "நான் வாடிக்கையாளர்"
                        )
                    ) {

                        button.innerHTML =
                            "👤 " +
                            lang.customer;

                    }


                    /*
                     * WORKER
                     */

                    else if (
                        text.includes(
                            "I'm a Worker"
                        ) ||
                        text.includes(
                            "मैं एक कर्मचारी हूँ"
                        ) ||
                        text.includes(
                            "ನಾನು ಕೆಲಸಗಾರ"
                        ) ||
                        text.includes(
                            "நான் தொழிலாளர்"
                        )
                    ) {

                        button.innerHTML =
                            "👷 " +
                            lang.worker;

                    }


                    /*
                     * ADMIN
                     */

                    else if (
                        text.includes(
                            "Cooperative Admin"
                        ) ||
                        text.includes(
                            "सहकारी प्रशासक"
                        ) ||
                        text.includes(
                            "ಸಹಕಾರಿ ನಿರ್ವಾಹಕರು"
                        ) ||
                        text.includes(
                            "கூட்டுறவு நிர்வாகி"
                        )
                    ) {

                        button.innerHTML =
                            "🏢 " +
                            lang.admin;

                    }

                }
            );

    }


    /* ========================================================
       CHANGE LANGUAGE FROM TOP DROPDOWN TOO
       ======================================================== */

    document.addEventListener(
        "change",
        function (event) {

            if (
                !event.target
            ) {
                return;
            }


            const id =
                event.target.id;


            if (
                id ===
                    "coOpLanguage" ||
                id ===
                    "languageSelector" ||
                id ===
                    "coOpPopupLanguage"
            ) {

                const language =
                    event.target.value;


                if (
                    COOP_LANGUAGES[
                        language
                    ]
                ) {

                    localStorage.setItem(
                        "coOpLanguage",
                        language
                    );


                    setTimeout(
                        function () {

                            applyCoOpSevaLanguage(
                                language
                            );

                        },
                        100
                    );

                }

            }

        },
        true
    );


    /* ========================================================
       WATCH FOR APP PAGE CHANGES
       ======================================================== */

    function startWatcher() {

        if (
            !document.body
        ) {
            return;
        }


        const observer =
            new MutationObserver(
                function () {

                    const language =
                        localStorage.getItem(
                            "coOpLanguage"
                        ) || "en";


                    /*
                     * Only touch the landing page.
                     */

                    if (
                        document.querySelector(
                            ".welcome-container"
                        )
                    ) {

                        setTimeout(
                            function () {

                                applyCoOpSevaLanguage(
                                    language
                                );

                            },
                            50
                        );

                    }

                }
            );


        observer.observe(
            document.body,
            {
                childList: true,
                subtree: true
            }
        );

    }


    /* ========================================================
       START EVERYTHING
       ======================================================== */

    function start() {

        /*
         * IMPORTANT:
         * Remove the OLD popup so we only have ONE popup.
         */

        removeOldPopups();


        /*
         * Create our new popup.
         */

        createLanguagePopup();


        /*
         * Apply saved language to page.
         */

        const language =
            localStorage.getItem(
                "coOpLanguage"
            ) || "en";


        setTimeout(
            function () {

                applyCoOpSevaLanguage(
                    language
                );

            },
            300
        );


        startWatcher();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    } else {

        start();

    }

})();
