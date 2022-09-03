<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>元长-长长长长长长长长长长长长长长长长长长长</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/SUNWUYUAN/longlink" target="_blank" text>
        <span class="mr-2">在GitHub上贡献</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <template>

        <template>
          <v-container fill-height='prop'>
            <v-card class="mx-auto" max-width="344" elevation="20">
              <v-card-text>
                <div>长长长长长长长长长长长长</div>
                <p class="text-h4 text--primary">
                  元长
                </p>
                <p>来自未来的长链接</p>
              </v-card-text>
              <v-card-actions>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="linkinput" label="待缩长的网址" placeholder="输入网址" outlined prefix="https://"
                    :rules="emailRules">
                  </v-text-field>


                  <v-dialog transition="dialog-bottom-transition" max-width="600">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" :disabled="!valid" color="success" class="mr-4" @click="validate">
                        长</v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar color="primary" dark>生成完成！</v-toolbar>
                        <v-card-text>
                          <h4> {{ base64ok }} </h4>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">完成</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>

                  <v-btn color="error" class="mr-4" @click="reset">
                    重置
                  </v-btn>


                </v-form>

              </v-card-actions>
            </v-card>
          </v-container>




        </template>


      </template>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style>
.fatherdiv {
  width: max-content;
  height: max-content;
}

.sondiv {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
<script>
var base64ok = '123'
</script>
<script>
  export default {
    data: () => ({
      checkCode: '',
      valid: false,
      linkinput:'',
      base64ok:'',
      emailRules: [
        v => !!v || '请输入网址',
        v => /.+..+/.test(v) || '请输入网址',
      ],
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
        var Base64 = require('js-base64').Base64
        this.createCode()
        this.base64ok = "https://longlink.wuyuan.dev/ohhbilibiliyyds/go.html?bilibili_wuyuan_yyds="+ Base64.encode("https://"+this.linkinput)+"#"+this.checkCode
        console.log(this.base64ok)
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      createCode() {
        let code = '';//声明一个空的字符串值用于后面赋值
        const codeLength = 100; //验证码的长度，可以根据个人需求改变
        const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ]; //随机数的取值范围
        for (let i = 0; i < codeLength; i++) {
          //循环遍历codeLength，值是几，就循环几次
          let index = Math.floor(Math.random() * 62); //Math.floor方法用于返回小于或等于一个给定数字的最大整数；Math.random方法返回 0（含）和 1（不含）之间的随机数
          code += random[index]; //根据索引取得随机数加到code上
        }
        this.checkCode = code; //把code值赋给data中定义好的checkCode
      },

      
    },
  }
</script>