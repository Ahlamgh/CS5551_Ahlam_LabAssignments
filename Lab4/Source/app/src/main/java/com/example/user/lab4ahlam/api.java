package com.example.user.lab4ahlam;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class api extends AppCompatActivity {
    TextView output;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_api);
        output = (TextView) findViewById(R.id.output);
    }
    public void translateTo(View v)
    {
        //This code redirects the from login page to the home page.
        //Intent redirect = new Intent(api.this, register.class);
        //startActivity(redirect);
        TextView textView = (TextView) findViewById(R.id.input);
        String text = textView.getText().toString();
        String getURL= "https://translation.googleapis.com/language/translate/v2?q=" + text + "&target=ar&key=AIzaSyCkfleD2A-9zHcVW8BS_wluHRP34jwJYys";
        OkHttpClient client = new OkHttpClient();
        try {
            Request request = new Request.Builder()
                    .url(getURL)
                    .build();
            client.newCall(request).enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println(e.getMessage());
                }
                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    final JSONObject jsonResult;
                    final String result = response.body().string();
                    try {
                        jsonResult = new JSONObject(result);
                        final String convertedText = jsonResult.getJSONObject("data").getJSONArray("translations").getJSONObject(0).getString("translatedText");
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                output.setText(convertedText);
                            }
                        });
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });


        } catch (Exception ex) {
            output.setText(ex.getMessage());
        }
    }


}
