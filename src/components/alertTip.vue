<template>
	<transition name="modal">
      <div class="modal-mask" id="popWinGeneral">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header" :class="[alertData.type==2 || alertData.type==3 ? 'no_bg' : '']">
              <h4 class="modal-title fs_16" v-html="alertData.ts"></h4>
            </div>
            <div class="modal-body fs_12" v-html="alertData.txt"></div>
            <div class="modal-footer" v-if="alertData.type==1">
              <button type="button" class="btn btn-default os-close-modal fs_14" data-dismiss="modal" @click='closeTip()' v-html="alertData.btn"></button>
            </div>
            <div class="modal-footer" v-if="alertData.type==2">
              <button class="btn btn-default os-close-modal fs_14 btn_top" @click='btnGoPage()' v-html="alertData.btn2_txt1"></button>
              <button class="btn btn-default os-close-modal fs_14" @click="btnCallback()" v-html="alertData.btn2_txt2"></button>
            </div>
            <div class="modal-footer" v-if="alertData.type==3">
                <img src="../images/icon_travel_call.png" class="call_logo" />
            </div>
             <div class="modal-footer" v-if="alertData.type==3">
                <button class="btn btn-default os-close-modal fs_14 btn_top" @click='closeTip()'>取消</button>
                <a  @click='closeTip()' class="btn btn-default os-close-modal fs_14" :href="'tel:' + alertData.tel" >拨打</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
	data(){
        return{
            alertData:'',
        }
    },
    props: ['alertText'],
    watch:{
    	alertText(){
    		if(this.alertText[0]!=undefined) this.alertData = this.alertText[0];
    	}
    	
    },
    mounted(){
  		console.log(this.alertText[0]);
  		this.alertData = this.alertText[0];
  		
    },
    created(){
    	
    },
    
    methods: {
        closeTip(){
            this.$emit('closeTip')
        },
        btnCallback(){
        	this.$emit('btnCallback')
        },
        btnGoPage(){
            this.$emit('btnGoPage')
        }
    }
}
</script>

<style lang="scss" scoped>
//modal window
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .35);
    transition: opacity .3s ease;
    display:table;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 70%;
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-radius: 0.3rem;
    outline: 0;
    margin: 0 auto;
    overflow: hidden;
}

.modal-header {
    padding: 0.49rem;
    background-image: url(../images/pop_bg.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-bottom: none;
    padding-top: 0.75rem;
    text-align: center;
    color: #4E4E5F;
}
// .no_bg{padding: 5.49rem;}
.modal-body {
    text-align: center;
    position: relative;
    color: #717171;
    padding: 0.35rem;
    padding-top: 0;
    padding-bottom: 0.84rem;
    color: #898994;
}

.modal-footer {
    padding: 0;
    border-top: none;
    .call_logo{
        width:40%;
        margin:0 30%;
    }
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.modal-title {
    font-weight: 500;
    color: #4E4E5F;
    text-align: center;
}

.os-close-modal {
    border-radius: 0.25rem;
    width: 100%;
    outline: none;
    height: 100%;
    height: 1.2rem;
    background: #2c94f3;
    color: #ffffff;
    font-weight: 400;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: inline-block;
    line-height:1.2rem;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
}
.btn_top{
	background:#fff;
	color: #2c94f3;
	border-top:1px solid #eee;
}
</style>