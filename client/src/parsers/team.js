export class TeamParser {

    constructor() {

    }

    parseTeamIdWithImage(teamId) {
        switch (teamId) {
            case 0:
                return '../../assets/teams/mercedes.jpg'
                break;
            case 1:
                return '/assets/teams/ferrari.jpg'
                break;
            case 2:
                return '../../assets/teams/redbull.jpg'
                break;
            case 3:
                return '../../assets/teams/williams.jpg'
                break;
            case 4:
                return '../../assets/teams/aston-martin.jpg'
                break;
            case 5:
                return '../../assets/teams/alpine.jpg'
                break;
            case 6:
                return '../../assets/teams/alpha-tauri.jpg'
                break;
            case 7:
                return '../../assets/teams/haas.jpg'
                break;
            case 8:
                return '../../assets/teams/mclaren.jpg'
                break;
            case 9:
                return '../../assets/teams/alfa-romeo.jpg'
                break;
            default:
                break;
        }
    }
}