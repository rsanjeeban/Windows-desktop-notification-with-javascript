<script>
    
function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
        var options = {
            body: "This is the body of the notification",
            icon: "icon.jpg",
            dir : "ltr"
        };
        var notification = new Notification("Hi there",options);
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (!('permission' in Notification)) {
                Notification.permission = permission;
            }

            if (permission === "granted") {
                var options = {
                    body: "This is the body of the notification",
                    icon: "icon.jpg",
                    dir : "ltr"
                };
                var notification = new Notification("Hi there",options);
            }
        });
    }
}

Notification.requestPermission(function (permission) {
    if (!('permission' in Notification)) {
        Notification.permission = permission;
    }
});
var options = {
    body: message.notification_message,
    icon: message.club_data.club_logo,
    dir : "ltr"
};
var notification = new Notification('Driver', options); 

</script>
