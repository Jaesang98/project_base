import { reactive } from "vue";
import { RouteParamsRaw } from "vue-router";
import router from "@/router";

export {
	pageOpen,
	pageClose,
}


// 화면열기
const pageOpen = function(name:string, params?:RouteParamsRaw | Obj, useState?: boolean) {
	if(router.hasRoute(name)) {
		if(params) {
			const store = useStore();
			store.$patch({ pageParam: params as Obj})
		}
		if(useState) {
			router.push({name, state : params});
		} else {
			router.push({name, params});
		}
	} else {
		router.push("/");
	}
};

// 화면닫기
const pageClose = function() {
	if(router.options.history.state.back) {
		router.go(-1);
	} else {
		router.replace("/");
	}
}