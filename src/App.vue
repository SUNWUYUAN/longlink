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
                  <template v-slot:activator="{ on, attrs }" >
                    <v-btn v-bind="attrs" v-on="on" :disabled="!valid" color="success" class="mr-4" @click="validate">长</v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark>生成完成！</v-toolbar>
                      <v-card-text>
                  <h4>  {{base64ok}}    </h4>                      </v-card-text>
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
        this.base64ok = "https://longlink.wuyuan.dev/ohhbilibiliyyds/go.html?url="+ Base64.encode(this.linkinput)
        console.log(this.base64ok)

      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      
    },

  }


</script>
