export class AppSetting {
    private static serverUrl: string = "https://pet-store-spring-boot.mybluemix.net";
    private static endpoints = {
        post: `${AppSetting.serverUrl}/pet`,
        delete: `${AppSetting.serverUrl}/pet`
    };

    public static get endpoint() {
        return this.endpoints;
    }
}