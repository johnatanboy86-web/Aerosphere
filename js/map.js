document.addEventListener("DOMContentLoaded", () => {

    const map = document.getElementById("worldMap");

    if (!map) return;

    map.innerHTML = `
        <div style="text-align:center">
            <div style="font-size:80px;">🌍</div>
            <h2 style="margin-top:20px;">Global Tracking</h2>
            <p style="color:#9fb3c8;margin-top:10px;">
                Leaflet sera intégré dans la prochaine version.
            </p>

            <div style="
                margin-top:35px;
                display:flex;
                justify-content:center;
                gap:15px;
                flex-wrap:wrap;
            ">

                <div style="background:#2f80ed;padding:10px 18px;border-radius:30px;">
                    ✈ 18 Flights
                </div>

                <div style="background:#16a34a;padding:10px 18px;border-radius:30px;">
                    📦 257 Shipments
                </div>

                <div style="background:#f59e0b;padding:10px 18px;border-radius:30px;">
                    ⚠ 3 Alerts
                </div>

            </div>
        </div>
    `;

});
