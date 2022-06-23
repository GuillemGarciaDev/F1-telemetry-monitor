export class TeamParser {

    constructor() {

    }

    parseTeamIdWithImage(teamId) {
        switch (teamId) {
            case 76:
                return '../../assets/teams/mercedes.jpg'
                break;
            case 77:
                return '/assets/teams/ferrari.jpg'
                break;
            case 78:
                return '../../assets/teams/redbull.jpg'
                break;
            case 79:
                return '../../assets/teams/williams.jpg'
                break;
            case 80:
                return '../../assets/teams/aston-martin.jpg'
                break;
            case 85:
                return '../../assets/teams/alpine.jpg'
                break;
            case 86:
                return '../../assets/teams/alpha-tauri.jpg'
                break;
            case 87:
                return '../../assets/teams/haas.jpg'
                break;
            case 88:
                return '../../assets/teams/mclaren.jpg'
                break;
            case 89:
                return '../../assets/teams/alfa-romeo.jpg'
                break;
            default:
                break;
        }
    }
}