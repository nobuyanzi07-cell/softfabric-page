function timeAlert () {
    const date = new Date ();
    alert (
        `time stamp: ${date.toLocaleDateString("en-KE",{
            timeZone: "Africa/Nairobi",
        })}`,
    );
}

timeAlert();