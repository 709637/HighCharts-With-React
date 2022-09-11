export class LogNodes {
    category;
    startDate;
    endDate;
    duration;
    session;
    parent;
    self;
    result;
    constructor(data) {
        this.category = data.category;
        this.startDate = data.start_date;
        this.endDate = data.end_date;
        this.duration = data.duration;
        this.session = data.session;
        this.parent = data.parent;
        this.self = data.self;
        this.result = data.result;
    }
}

export class LogNodesList {
    collection;
    constructor(data) {
        if (data && data.map) {
            this.collection = data.map(
                (logNodes) => new LogNodes(logNodes),
            );
        } else {
            this.collection = [];
        }
    }
}

export class SessionData {
    format;
    version;
    session;
    logNodes;
    constructor(data) {
        this.format = data.format;
        this.version = data.version;
        this.session = data.session;
        this.logNodes = new LogNodesList(data.log_nodes);
    }
}

export class SessionDataList {
    collection;
    constructor(data) {
        if (data && data.map) {
            this.collection = data.map(
                (sessionData) => new SessionData(sessionData),
            );
        } else {
            this.collection = [];
        }
    }
}