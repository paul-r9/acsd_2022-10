class SpaceportDepartureBoard {
    constructor(launchInfoProvider) {
        this.launchInfoProvider = launchInfoProvider;
        this.sortLaunches();
    }

    sortLaunches() {
        // Request the unordered list of launches from the launchInfoProvider
        // Sort the launches and store the sorted list (to be returned in launchList()
        throw new Error("TODO - implement the sorting logic!")
    }

    get launchList() {
        throw new Error("TODO - return the sorted list of launches")
    }

}