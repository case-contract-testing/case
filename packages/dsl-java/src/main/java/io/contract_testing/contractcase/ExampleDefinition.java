package io.contract_testing.contractcase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.contract_testing.contractcase.definitions.mocks.base.AnyMockDescriptor;
import io.contract_testing.contractcase.definitions.states.AnyState;
import java.util.List;

public class ExampleDefinition<M extends AnyMockDescriptor> {

  private final List<? extends AnyState> states;
  private final M definition;

  public ExampleDefinition(List<? extends AnyState> states, M definition) {
    this.states = states;
    this.definition = definition;
  }

  Object getDefinition() {
    return definition;
  }

  public List<? extends Object> getStates() {
    return states;
  }

  public JsonNode toJSON() {
    var mapper = new ObjectMapper();
    ObjectNode node = mapper.createObjectNode();
    try {
      node.set("definition", mapper.valueToTree(mapper.readTree(definition.stringify())));
      node.set("states",
        mapper.createArrayNode()
            .addAll(this.states.stream()
                .<JsonNode>map((state) -> {
                  try {
                    return mapper.valueToTree(mapper.readTree(state.stringify()));
                  } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                  }
                })
                .toList()));
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }
    return node;

  }


}
