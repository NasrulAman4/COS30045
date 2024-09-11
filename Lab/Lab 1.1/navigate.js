if (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    const base = document.createElement("base");
    base.href = "/COS30045/";
    document.head.appendChild(base);
  }