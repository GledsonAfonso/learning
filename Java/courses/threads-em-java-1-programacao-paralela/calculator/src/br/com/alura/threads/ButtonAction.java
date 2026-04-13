package br.com.alura.threads;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.math.BigInteger;

import javax.swing.JLabel;
import javax.swing.JTextField;

public class ButtonAction implements ActionListener {
	private JTextField first;
	private JTextField second;
	private JLabel result;

	public ButtonAction(JTextField primeiro, JTextField segundo, JLabel resultado) {
		this.first = primeiro;
		this.second = segundo;
		this.result = resultado;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Runnable runnable = () -> multiplication();
		var threadCalculadora = new Thread(runnable, "Thread Calculadora");
		threadCalculadora.start();
	}

	private void multiplication() {
		var firstValue = Long.parseLong(first.getText());
		var secondValue = Long.parseLong(second.getText());
		var calculation = new BigInteger("0");

		for (int i = 0; i < firstValue; i++) {
			for (int j = 0; j < secondValue; j++) {
				calculation = calculation.add(new BigInteger("1"));
			}
		}

		result.setText(calculation.toString());
	}
}