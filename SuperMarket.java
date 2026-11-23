import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Product class with stock
class Product {
    private int id;
    private String name;
    private double price;
    private int stock;

    public Product(int id, String name, double price, int stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getStock() {
        return stock;
    }

    // Reduce stock when sold
    public boolean reduceStock(int quantity) {
        if (stock >= quantity) {
            stock = stock - quantity;
            return true;
        } else {
            return false;
        }
    }
}

// Cart item
class CartItem {
    private Product product;
    private int quantity;

    public CartItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public double getSubTotal() {
        return product.getPrice() * quantity;
    }

    public Product getProduct() {
        return product;
    }

    public int getQuantity() {
        return quantity;
    }
}

// Cash Register system
class CashRegister {
    private List<CartItem> cart = new ArrayList<>();
    private double cashBoxMoney;

    // Initial cash: 3000
    public CashRegister() {
        cashBoxMoney = 3000.0;
    }

    public boolean addItem(Product p, int qty) {
        if (p.reduceStock(qty)) {
            cart.add(new CartItem(p, qty));
            return true;
        } else {
            return false;
        }
    }

    public double getTotal() {
        double total = 0;
        for (CartItem item : cart) {
            total = total + item.getSubTotal();
        }
        return total;
    }

    public double getCashBoxMoney() {
        return cashBoxMoney;
    }

    public double pay(double paidMoney) {
        double total = getTotal();
        if (paidMoney < total) {
            return -1;
        }
        double change = paidMoney - total;
        cashBoxMoney = cashBoxMoney + total;
        return change;
    }

    public void printReceipt() {
        System.out.println("\n=====================================");
        System.out.println("           CASHIER RECEIPT           ");
        System.out.println("=====================================");

        for (CartItem item : cart) {
            System.out.print(item.getProduct().getName());
            System.out.print(" x" + item.getQuantity());
            System.out.print("  Price:" + item.getProduct().getPrice());
            System.out.println("  Subtotal:" + item.getSubTotal());
        }

        System.out.println("-------------------------------------");
        System.out.println("Total Due: " + getTotal() + " USD");
        System.out.println("=====================================\n");
    }

    public void clearCart() {
        cart.clear();
    }
}

// Main program
public class SuperMarket{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Product> products = new ArrayList<>();
        products.add(new Product(1, "Water", 2.5, 100));
        products.add(new Product(2, "Bread", 4.0, 50));
        products.add(new Product(3, "Milk", 8.0, 30));
        products.add(new Product(4, "Chips", 5.0, 40));
        products.add(new Product(5, "Coke", 3.5, 60));

        CashRegister cr = new CashRegister();

        System.out.println("========== SUPERMARKET SYSTEM ==========");

        while (true) {
            System.out.println("\n===== MAIN MENU =====");
            System.out.println("1. Start Checkout");
            System.out.println("2. Check Cash Box Balance");
            System.out.println("0. Exit System");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            if (choice == 0) {
                System.out.println("System exited. Thank you!");
                break;
            } else if (choice == 2) {
                System.out.println("💰 Cash Box Balance: " + cr.getCashBoxMoney() + " USD");
                continue;
            } else if (choice != 1) {
                System.out.println("Invalid input!");
                continue;
            }

            // Start shopping
            cr.clearCart();
            while (true) {
                System.out.println("\n===== PRODUCT LIST (with stock) =====");
                for (Product p : products) {
                    System.out.print(p.getId() + ". ");
                    System.out.print(p.getName() + "  ");
                    System.out.print("$" + p.getPrice() + "  ");
                    System.out.println("Stock: " + p.getStock());
                }
                System.out.println("0. Checkout");
                System.out.print("Enter product ID: ");
                int num = sc.nextInt();

                if (num == 0) {
                    if (cr.getTotal() == 0) {
                        System.out.println("No items selected!");
                        continue;
                    }
                    break;
                }

                Product temp = null;
                for (Product p : products) {
                    if (p.getId() == num) {
                        temp = p;
                        break;
                    }
                }

                if (temp == null) {
                    System.out.println("Invalid ID!");
                    continue;
                }

                System.out.print("Enter quantity: ");
                int qty = sc.nextInt();
                if (qty <= 0) {
                    System.out.println("Quantity must be > 0!");
                    continue;
                }

                boolean ok = cr.addItem(temp, qty);
                if (ok) {
                    System.out.println("✅ Added: " + temp.getName() + " x" + qty);
                } else {
                    System.out.println("❌ Insufficient stock! Stock: " + temp.getStock());
                }
            }

            // Payment process
            cr.printReceipt();
            double total = cr.getTotal();

            while (true) {
                System.out.print("Enter payment amount: ");
                double money = sc.nextDouble();
                double change = cr.pay(money);

                if (change == -1) {
                    System.out.println("Insufficient payment! Please try again.");
                } else {
                    System.out.println("✅ Paid: " + money + " USD");
                    System.out.println("✅ Change: " + change + " USD");
                    System.out.println("✅ Cash Box Balance: " + cr.getCashBoxMoney() + " USD");
                    System.out.println("----------------------------------");
                    System.out.println("Transaction completed! Thank you!");
                    break;
                }
            }
        }
        sc.close();
    }
}
