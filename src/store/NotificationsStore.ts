import { reactive } from "vue";

export class NotificationsStore {
  public static errors: string[] = reactive<string[]>([]);
  public static warnings: string[] = reactive<string[]>([]);

  private static _setField(field: "warnings" | "errors", value: string[]): void {
    const totalLength = value.length + NotificationsStore[field].length;

    for (let index = 0; index < totalLength; index++) {
      NotificationsStore[field][index] = value[index];
    }
  }

  public static setErrors(errors: string[]): void {
    NotificationsStore._setField("errors", errors);
  }

  public static setWarnings(warnings: string[]): void {
    NotificationsStore._setField("warnings", warnings);
  }
}
