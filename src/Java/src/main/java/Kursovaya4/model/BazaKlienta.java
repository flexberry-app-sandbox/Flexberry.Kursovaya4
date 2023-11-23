package Kursovaya4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: БазаКлиента
 */
@Entity(name = "IISKursovaya4БазаКлиента")
@Table(schema = "public", name = "БазаКлиента")
public class BazaKlienta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDКлиента")
    private Integer idклиента;

    @Column(name = "Логин")
    private String логин;

    @Column(name = "Пароль")
    private String пароль;

    @Column(name = "НомерКарты")
    private Integer номеркарты;


    public BazaKlienta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDКлиента() {
      return idклиента;
    }

    public void setIDКлиента(Integer idклиента) {
      this.idклиента = idклиента;
    }

    public String getЛогин() {
      return логин;
    }

    public void setЛогин(String логин) {
      this.логин = логин;
    }

    public String getПароль() {
      return пароль;
    }

    public void setПароль(String пароль) {
      this.пароль = пароль;
    }

    public Integer getНомерКарты() {
      return номеркарты;
    }

    public void setНомерКарты(Integer номеркарты) {
      this.номеркарты = номеркарты;
    }


}