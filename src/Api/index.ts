import * as rawData from "../../data.json"
//
// class ApiService {
//     static async getSchedule(): Promise<any> {
//         return Promise.resolve(rawData.default)
//     }
// }
export const ApiData = {
    getClientsSchedule: async () => Promise.resolve(rawData.default),
}
// export default ApiService;

