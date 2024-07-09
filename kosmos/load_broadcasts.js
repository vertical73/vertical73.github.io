"use strict";

function updateYmdMap(ymdMap, dateKey, broadcastDurationMilliseconds) {
    let broadcastDurationMinutes = (broadcastDurationMilliseconds / 1000 / 60);
    if (ymdMap.has(dateKey)) {
        let minutesForDate = ymdMap.get(dateKey);
        ymdMap.set(dateKey, (minutesForDate + broadcastDurationMinutes));
    } else {
        ymdMap.set(dateKey, broadcastDurationMinutes);
    }
}

function processBroadcast(ymdMap, broadcast) {
    let startdt = new Date(broadcast.startdt);
    let enddt = new Date(broadcast.enddt);

    // check if start and end on same ymd
    if (startdt.getDate() === enddt.getDate()) {
        // if so, ymd -> (end-start)
        let dateKey = new Date(startdt.getFullYear(), startdt.getMonth(), startdt.getDate());
        let broadcastDurationMilliseconds = (enddt.getTime() - startdt.getTime());
        updateYmdMap(ymdMap, dateKey, broadcastDurationMilliseconds);
    } else {
        // else calc from ymd date line (end date midnight) and make two entries
        let startDateKey = new Date(startdt.getFullYear(), startdt.getMonth(), startdt.getDate());
        let endDateKey = new Date(enddt.getFullYear(), enddt.getMonth(), enddt.getDate());

        let startDateBroadcastDurationMilliseconds = (endDateKey.getTime() - startdt.getTime());
        updateYmdMap(ymdMap, startDateKey, startDateBroadcastDurationMilliseconds);
    
        let endDateBroadcastDurationMilliseconds = (enddt.getTime() - endDateKey.getTime());
        updateYmdMap(ymdMap, endDateKey, endDateBroadcastDurationMilliseconds);
    }
}

async function loadBroadcastsIntoMap(jsonPath) {
    let map = await fetch(jsonPath)
        .then((fetch_response) => {
            return fetch_response.json();
        })
        .then((broadcasts) => {
            let ymdMap = new Map();
            for (let b of broadcasts) {
                processBroadcast(ymdMap, b);
            }
            return ymdMap;
        });
    return map;
}