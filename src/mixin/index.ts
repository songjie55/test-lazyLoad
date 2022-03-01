import Vue from 'vue';
import Component, {mixins} from "vue-class-component";

/**
 * @description:方法
 */
@Component
export class Methods extends Vue {
    /**
     * @description:分以下金额向上取整
     */
    roundedUp(num: number): number {
        if (num < 10000 && num !== 0) {
            return 10000;
        } else if (num % 10000 === 0) {
            return num;
        } else {
            return 10000;
        }
    }

}

/**
 * @description:过滤
 */
@Component({
    filters: {
        /**
         * @description:金额忽转元
         */
        normalizeMoney(val: string | number, float: number = 2): string {
            if (Math.abs(Number(val)) < 10000) {//忽略分
                val = 0;
            }
            const num: number = Number(val) / 1000000;
            // 不做四舍五入，截取小数点后两位
            const arr: string[] = String(num)
                .split('.');
            if (arr.length === 1) {
                return `${arr[0]}.${'0'.repeat(float)}`;
            } else {
                arr[1] = arr[1].padEnd(float, '0');
                return `${arr[0]}.${arr[1].substring(0, float)}`;
            }
        }

    }
})
export class CVue extends mixins(Methods) {
}
