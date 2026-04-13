package br.com.alura.threads;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Application {
	public static void main(String[] args) {
		var window = new JFrame("Multiplicação Demorada");

		var first = new JTextField(10);
		var second = new JTextField(10);
		var button = new JButton(" = ");
		var result = new JLabel("           ?          ");
		
		button.addActionListener(new ButtonAction(first, second, result));
		
		var panel = new JPanel();
		panel.add(first);
		panel.add(new JLabel("x"));
		panel.add(second);
		panel.add(button);
		panel.add(result);
		
		window.add(panel);
		window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		window.pack();
		window.setVisible(true);
	}
}


