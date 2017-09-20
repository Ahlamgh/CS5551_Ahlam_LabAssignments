package com.example.user.lab4ahlam;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.TextView;

public class register extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_regi);
    }
    public void login(View v)
    {
        //This code redirects the from login page to the home page.
        Intent redirect = new Intent(register.this, api.class);
        startActivity(redirect);
    }

}
